function getDay(day) {
    switch (day) {
        case 1:
            day = "Minggu"
            break;
        case 2:
            day = "Senin"
            break;
        case 3:
            day="Selasa"
            break;
        case 4:
            day = "Rabu"
            break;
        case 5:
            day = "Kamis"
            break;
        case 6:
            day="Jumat"
            break;
        case 7:
            day="Sabtu"
            break;
        default:
            break;
    }
    return day
}
console.log(getDay(4));