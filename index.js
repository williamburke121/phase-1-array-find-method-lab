function superbowlWin(array){

    const win = array.find(record => record.result === 'W')
    return win ? win.year : undefined

    }