// var TrieNode = /** @class */ (function () {
//     function TrieNode() {
//         this.children = {};
//         this.isEndOfWord = false;
//         this.wordCount = 0;
//     }
//     return TrieNode;
// }());
// var Trie = /** @class */ (function () {
//     function Trie() {
//         this.root = new TrieNode();
//     }
//     Trie.prototype.insert = function (word) {
//         var node = this.root;
//         for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
//             var char = word_1[_i];
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//             node.wordCount += 1; // Incrementa o contador de palavras
//         }
//         node.isEndOfWord = true;
//     };
//     Trie.prototype.searchByPrefix = function (prefix, maxResults, page) {
//         if (page === void 0) { page = 1; }
//         var node = this.root;
//         for (var _i = 0, prefix_1 = prefix; _i < prefix_1.length; _i++) {
//             var char = prefix_1[_i];
//             if (!node.children[char]) {
//                 return [];
//             }
//             node = node.children[char];
//         }
//         return this.collectWords(node, prefix, maxResults, page);
//     };
//     Trie.prototype.collectWords = function (node, prefix, limit, page) {
//         var words = [];
//         this.collectWordsHelper(node, prefix, words, limit, page, 0);
//         return words;
//     };
//     Trie.prototype.collectWordsHelper = function (node, prefix, words, limit, page, currentCount) {
//         if (words.length >= limit)
//             return currentCount; // Limite de palavras atingido
//         if (node.isEndOfWord) {
//             if (currentCount >= (page - 1) * limit) {
//                 words.push(prefix);
//             }
//             currentCount++;
//         }
//         for (var char in node.children) {
//             if (words.length >= limit)
//                 break;
//             currentCount = this.collectWordsHelper(node.children[char], prefix + char, words, limit, page, currentCount);
//         }
//         return currentCount;
//     };
//     return Trie;
// }());
// // Usando a Trie
// var trie = new Trie();
// var words = ["cachorro", "carro", "casa", "cadeira", "computador", "camiseta", "cabide", "café", "canoa", "cavalo"];
// words.forEach(function (word) { return trie.insert(word); });
// // Busca lexicográfica com paginação (primeira página de 3 resultados para prefixo "ca")
// console.log(trie.searchByPrefix("ca", 3, 1)); // Primeira página com 3 resultados
// console.log(trie.searchByPrefix("ca", 3, 2)); // Segunda página com 3 resultados
