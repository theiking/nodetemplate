export enum District {
    "Quận 1",
    "Quận 2",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
}

export enum States {
    "ACTIVE",
    "CLOSED",
    "DELIVERED",
    "PENDING",
}

export const getEnumvalues = (param: any): String[] => {
    let result: String[] = [];
    for (let value in param) {
        if (isNaN(Number(value))) {
            result.push(value);
        }
    }
    return result;
}


