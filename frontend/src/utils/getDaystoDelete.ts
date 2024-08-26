export const getDaystoDelete = (date: Date, settingsDays: number) => {
    const nowDate = new Date();
    const diffTime = Math.abs(nowDate.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const days = settingsDays - diffDays;
    return days > 0 ? days : 0;
}