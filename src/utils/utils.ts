// 나중에 글자 수가 아니라 div의 크기와 글자의 크기를 비교하는 방식으로 변경
function truncateTextOverflow(str: string, length = 3) {
  if (str.length > length) {
    const newStr = str.slice(0, length) + "...";
    return newStr;
  }
  return str;
}

export { truncateTextOverflow };
