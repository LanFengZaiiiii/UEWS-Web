const msgsDom = document.querySelector(".msgs");
function sendMsg(msg, duration)
{
    const newMsgDom = document.createElement("div");
    newMsgDom.innerText = msg;
    newMsgDom.classList.add("msg");
    //newMsgDom.classList.add(type);
    msgsDom.appendChild(newMsgDom);
    if (duration >= 0)
        setTimeout(() => {
            newMsgDom.remove();
        }, duration);
}
sendMsg("Unofficial Earthquake Warning (Monitoring) System | 非官方地震预警系统(内部测试)", -1);