// Tạo từ điển chuyển đổi thứ từ tiếng Anh sang tiếng Việt
const dayOfWeekTranslation = {
    Monday: 'Thứ Hai',
    Tuesday: 'Thứ Ba',
    Wednesday: 'Thứ Tư',
    Thursday: 'Thứ Năm',
    Friday: 'Thứ Sáu',
    Saturday: 'Thứ Bảy',
    Sunday: 'Chủ Nhật',
};

// Tạo hàm chuyển đổi ngày từ tiếng Anh sang tiếng Việt
const convertDayOfWeek = (dayOfWeek) => {
    return dayOfWeekTranslation[dayOfWeek];
};

const convertDayOfWeektoNumber = (dayOfWeek) => {
    switch (dayOfWeek) {
        case 'Monday':
            return 2;
        case 'Tuesday':
            return 3;
        case 'Wednesday':
            return 4;
        case 'Thursday':
            return 5;
        case 'Friday':
            return 6;
        case 'Saturday':
            return 7;
        case 'Sunday':
            return 8;
        default:
            return 0;
    }
};

export { 
    convertDayOfWeek, 
    convertDayOfWeektoNumber 
};