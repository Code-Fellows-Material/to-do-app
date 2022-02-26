

  const setDisplayList = (list, displayComplete) => {
    if(displayComplete) return list;
    return list.filter((item) => !item.complete)
  }

  const setShowArr = (numToShow, pageNum, list, displayComplete, totalItems) => {
    let tempArr = setDisplayList(list, displayComplete);
    const len = tempArr.length;
    totalItems = len;
    
    const startIdx = numToShow * pageNum;
    const endIdx = (len - startIdx) > numToShow ? 
      numToShow : 
      (len - startIdx);

    return tempArr.slice(startIdx, startIdx + endIdx);
  }

  export default setShowArr;