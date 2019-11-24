export const dateBuilder = (ISOTime) => {

    const pastDateStamp = new Date(ISOTime)
    const now = Date.now();
    const stamp = new Date(now - pastDateStamp.getTime());
    console.log(pastDateStamp);
    const pastHr = stamp / 1000 / 60 / 60;

    let pastTime = "";
    if (pastHr < 1) {
        pastTime = `posted ${Math.ceil(pastHr / 60)} mins ago`;
    } else if (pastHr > 24) {
        pastTime = `posted ${Math.round(pastHr / 24)} day ago`
    } else {
        pastTime = `posted ${Math.round(pastHr)} hours ago`
    }

   

    return pastTime;
}

