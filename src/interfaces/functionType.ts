// 接口作为函数的类型使用
interface Search {
    (source: string, substr: string):boolean
}

const handleSearch = function(source: string, substr: string):boolean {
    return source.includes(substr)
}

console.log(handleSearch('2个', '2'))