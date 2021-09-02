setInterval(() => {
    dt = new Date();

    hour_time = dt.getHours();
    minute_time = dt.getMinutes();
    second_time = dt.getSeconds();

    hour_rotation = 30*hour_time + minute_time/2;
    minute_rotation = 6*minute_time;
    second_rotation = 6*second_time;

    hour.style.transform = `rotate(${hour_rotation}deg)`;
    minute.style.transform = `rotate(${minute_rotation}deg)`;
    second.style.transform = `rotate(${second_rotation}deg)`;
}, 1000);