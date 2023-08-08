// 나중에 글자 수가 아니라 div의 크기와 글자의 크기를 비교하는 방식으로 변경
function truncateTextOverflow(str: string, length = 3) {
  if (str.length > length) {
    const newStr = str.slice(0, length) + "...";
    return newStr;
  }
  return str;
}

function calculateDday(deadline: string) {
  const today = new Date();
  const timeDiff = new Date(deadline).getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // 밀리초를 일로 변환
  if (daysLeft === 0) {
    return "D-Day!";
  } else if (daysLeft > 0) {
    return `D-${daysLeft}`;
  } else {
    return `마감 완료`;
  }
}

export { truncateTextOverflow, calculateDday };
