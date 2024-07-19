export const getStatusColor = (status: number) => {
    switch (status) {
        case 3:
            return "success";
        case 2:
            return "warning";
        default:
            return "danger";
    }
}