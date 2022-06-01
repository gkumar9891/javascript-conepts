console.log("start");

function bfs(stack, visited, graph, v) {

    if(graph[v].length == 0) {
        return;
    }

    for(let i = 0; i < graph[v].length; i++) {
        if(visited[ graph[v][i] ] == false) {
          bfs(stack, visited, graph, graph[v][i]);
          stack.push(graph[v][i]);
          visited[ graph[v][i] ] = true;
        }
    }
}

function topologicalSort(graph) {
    let stack = [];
    let visited = [];

    for(let i = 1; i <= 6; i++) {
        visited[i] = false;
    }


    if(graph[1]){
        bfs(stack, visited, graph, 1);
        stack.push(1);
    } else {
        return;
    }

    let stack2 = [];

    for(let i = stack.length - 1; i >= 0; i--) {
        stack2.push(stack[i]);   
    }

    return stack2;
}

graph = [[], [2, 3], [4], [4], [5, 6], [6], []];

console.log( topologicalSort(graph) );

console.log("end")