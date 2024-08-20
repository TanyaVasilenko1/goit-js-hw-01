function getElementWidth(content,padding,border){
    const contentnum = Number.parseFloat(content);
    const paddingnum = Number.parseFloat(padding);
    const bordernum = Number.parseFloat(border);
    const result = contentnum + 2 *(paddingnum + bordernum);
    return result;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
