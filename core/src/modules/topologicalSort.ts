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
  const result: string[] = [];
  const errors: string[] = [];
  const visited: Record<string, boolean> = {};
  const temp: Record<string, boolean> = {};
  for (const node in graph) {
    if (!visited[node] && !temp[node]) {
      topologicalSortHelper(node, visited, temp, graph, result, errors);
    }
  }

  if (errors.length > 0) throw new Error(errors.join("\n"));

  return result;
}

function topologicalSortHelper(
  node: string,
  visited: Record<string, boolean>,
  temp: Record<string, boolean>,
  graph: Graph,
  result: string[],
  errors: string[]
) {
  temp[node] = true;
  const neighbors = graph[node];
  if (!neighbors) {
    errors.push(`unknownNodeId ${node}`);
    return;
  }
  for (let i = 0; i < neighbors.length; i += 1) {
    const n = neighbors[i];
    if (temp[n]) errors.push("The graph is not a DAG");
    if (!visited[n])
      topologicalSortHelper(n, visited, temp, graph, result, errors);
  }
  temp[node] = false;
  visited[node] = true;
  result.push(node);
}
