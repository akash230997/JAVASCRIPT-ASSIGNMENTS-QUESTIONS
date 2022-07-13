//PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter 
//angle formed between hour and minute hand at any given time.
//Note: You have to complete Minimal_Angle function. No need to take any input.
//Ans - 
var Minimal_Angle = (h, m) => {
    const minute = m * 6;
    const hour = (h * 30) + (m * 0.5);
    const angle = Math.abs(hour - minute);
    return Math.min(angle, 360 - angle);
};


console.log(Minimal_Angle(5,30));