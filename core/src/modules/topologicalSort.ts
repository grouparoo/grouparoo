// From https://jeremyckahn.github.io/javascript-algorithms/graphs_others_topological-sort.js.html (with modifications)
// Learn more @ https://en.wikipedia.org/wiki/Topological_sorting

export type Graph = { [key: string]: string[] };

/**
 * Topological sort algorithm of a directed acyclic graph.<br><br>
 * Time complexity: O(|E| + |V|) where E is a number of edges
 * and |V| is the number of nodes.
 *
 * @public
 * @param {Array} Graph Adjacency list, which represents the graph.
 * @returns {Array} Ordered vertices.
 *
 * @example
 * var topsort =
 *  require('path-to-algorithms/src/graphs/' +
 * 'others/topological-sort').topologicalSort;
 * var graph = {
 *     v1: ['v2', 'v5'],
 *     v2: [],
 *     v3: ['v1', 'v2', 'v4', 'v5'],
 *     v4: [],
 *     v5: []
 * };
 * var vertices = topologicalSort(graph); // ['v3', 'v4', 'v1', 'v5', 'v2']
 */
export function topologicalSort(graph: Graph) {
  var result: string[] = [];
  var visited = [];
  var temp = [];
  for (var node in graph) {
    if (!visited[node] && !temp[node]) {
      topologicalSortHelper(node, visited, temp, graph, result);
    }
  }

  return result;
}

function topologicalSortHelper(
  node,
  visited,
  temp,
  graph: Graph,
  result: string[]
) {
  temp[node] = true;
  var neighbors = graph[node];
  for (var i = 0; i < neighbors.length; i += 1) {
    var n = neighbors[i];
    if (temp[n]) throw new Error("The graph is not a DAG");
    if (!visited[n]) topologicalSortHelper(n, visited, temp, graph, result);
  }
  temp[node] = false;
  visited[node] = true;
  result.push(node);
}
