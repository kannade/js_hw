function floydWarshall(graph) {
    const dist = [];
    const path = [];
    const n = graph.length;

    // Инициализируем матрицу dist со значениями графа
    for (let i = 0; i < n; i++) {
        dist[i] = [];
        for (let j = 0; j < n; j++) {
            dist[i][j] = graph[i][j];
        }
    }

    // Вычисляем кратчайшие расстояния между каждой парой вершин
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    // path[i, j] = k;
                }
            }
        }
    }

    // console.log(path)
    return dist;
}

// Пример
const graph = [
    [0, 5, Infinity, 10],
    [Infinity, 0, 3, Infinity],
    [Infinity, Infinity, 0, 1],
    [Infinity, Infinity, Infinity, 0]
];

const shortestDistances = floydWarshall(graph);
console.log(shortestDistances); // [[0, 5, 8, 9], [Infinity, 0, 3, 4], [Infinity, Infinity, 0, 1], [Infinity, Infinity, Infinity, 0]]

// Пример 2
const graph2 = [
    [0, 8, 5],
    [3, 0, Infinity],
    [Infinity, 2, 0]
];

const shortestDistances2 = floydWarshall(graph2);
console.log(shortestDistances2); // [[0, 7, 5], [3, 0, 8], [5, 2, 0]]