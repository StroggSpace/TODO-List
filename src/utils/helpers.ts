export const getStatusColor = (status: string) => {
    switch (status) {
        case "3":
            return "success";
        case "2":
            return "warning";
        case "1":
            return "danger";
        default:
            return;
    }
}