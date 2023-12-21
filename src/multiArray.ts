/**
 * 這個函式的目的是將二維陣列的每個元素都加倍。
 * 你需要使用 JavaScript 的 Array.prototype.map 方法來實現這個功能。
 * 注意：原本的參數定義有誤，應該將參數定義為二維數字陣列。另外，函式的返回值也應該是二維數字陣列。
 * 
 * 範例:
 * 輸入: [[1, 2], [3, 4], [5, 6]]
 * 輸出: [[2, 4], [6, 8], [10, 12]]
 */

export function processMultiArray(arr: [number, number][]): [number, number][] {
    // 在此實現函式
    return arr.map((item) => {
        return Array.from(item, (x) => x * 2) as [number, number]
    })
}

// Notes
// number[][]：表示一個包含數字陣列的陣列。每個元素都是一個數字陣列，但這些內部陣列的長度不需要相同。
// [number, number][]：表示一個包含數字對的陣列。每個元素都是一個包含兩個數字的元組。這種表示法明確指定了內部陣列的長度為 2。