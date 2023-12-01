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

export { convertDayOfWeek };