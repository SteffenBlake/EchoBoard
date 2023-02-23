
export async function fetchDirectories(username, repo, branch) {
    var url = `https://api.github.com/repos/${username}/${repo}/git/trees/${branch}?recursive=1`
    var dirResp = await fetch(url);
    var json = await dirResp.json();

    return json.tree;
}