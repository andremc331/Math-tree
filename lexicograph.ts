// class TrieNode {
//     children: { [key: string]: TrieNode };
//     isEndOfWord: boolean;
//     wordCount: number;  // Número de palavras descendentes

//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//         this.wordCount = 0;
//     }
// }

// class Trie {
//     root: TrieNode;

//     constructor() {
//         this.root = new TrieNode();
//     }

//     insert(word: string): void {
//         let node = this.root;
//         for (const char of word) {
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//             node.wordCount += 1; // Incrementa o contador de palavras
//         }
//         node.isEndOfWord = true;
//     }

//     searchByPrefix(prefix: string, maxResults: number, page: number = 1): string[] {
//         let node = this.root;
//         for (const char of prefix) {
//             if (!node.children[char]) {
//                 return [];
//             }
//             node = node.children[char];
//         }
//         return this.collectWords(node, prefix, maxResults, page);
//     }

//     private collectWords(node: TrieNode, prefix: string, limit: number, page: number): string[] {
//         const words: string[] = [];
//         this.collectWordsHelper(node, prefix, words, limit, page, 0);
//         return words;
//     }

//     private collectWordsHelper(
//         node: TrieNode,
//         prefix: string,
//         words: string[],
//         limit: number,
//         page: number,
//         currentCount: number
//     ): number {
//         if (words.length >= limit) return currentCount; // Limite de palavras atingido
        
//         if (node.isEndOfWord) {
//             if (currentCount >= (page - 1) * limit) {
//                 words.push(prefix);
//             }
//             currentCount++;
//         }

//         for (const char in node.children) {
//             if (words.length >= limit) break;
//             currentCount = this.collectWordsHelper(node.children[char], prefix + char, words, limit, page, currentCount);
//         }
        
//         return currentCount;
//     }
// }

// // Usando a Trie
// const trie = new Trie();
// const words = ["cachorro", "carro", "casa", "cadeira", "computador", "camiseta", "cabide", "café", "canoa", "cavalo"];
// words.forEach(word => trie.insert(word));

// // Busca lexicográfica com paginação (primeira página de 3 resultados para prefixo "ca")
// console.log(trie.searchByPrefix("ca", 3, 1)); // Primeira página com 3 resultados
// console.log(trie.searchByPrefix("ca", 3, 2)); // Segunda página com 3 resultados