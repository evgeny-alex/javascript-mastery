import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    const githubUsername =
      body?.github_username ||
      body?.meta?.custom_data?.github_username ||
      body?.meta?.custom_data?.githubUsername;

    if (!githubUsername) {
      console.warn("No github_username provided");
      return NextResponse.json(
        { error: "No github_username provided" },
        { status: 400 }
      );
    }

    const variantName = body?.variantName || "";

    const githubToken = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_REPO_OWNER || "evgeny-alex";
    const repo =
      variantName === "Workflow"
        ? "ai-code-reviewer-workflow"
        : "ai-code-reviewer-agent";

    if (!githubToken) {
      console.error("GITHUB_TOKEN not configured");
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const inviteUrl = `https://api.github.com/repos/${owner}/${repo}/collaborators/${encodeURIComponent(
      githubUsername
    )}`;

    const inviteResp = await fetch(inviteUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "User-Agent": repo,
      },
      body: JSON.stringify({ permission: "pull" }),
    });

    const respText = await inviteResp.text();

    // 201 = invited, 204 = already has access
    if (![201, 204].includes(inviteResp.status)) {
      console.error("GitHub invite failed:", inviteResp.status, respText);
      return NextResponse.json(
        { ok: false, githubStatus: inviteResp.status, githubBody: respText },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Invite handler error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
