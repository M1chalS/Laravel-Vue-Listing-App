import { computed, isRef } from "vue";

export const useMonthlyPayment = (total, interestRate, duration) => {
    const monthlyPayment = computed(() => {
        const interest = (isRef(interestRate) ? interestRate.value : interestRate) / 100 / 12;
        const payments = (isRef(duration) ? duration.value : duration) * 12;
        const principal = isRef(total) ? total.value : total;

        const x = Math.pow(1 + interest, payments);
        const monthly = (principal * x * interest) / (x - 1);

        if (isFinite(monthly)) {
            return monthly.toFixed(2);
        }

        return 0;
    });

    const totalPaid = computed(() => {
        const monthly = isRef(monthlyPayment) ? monthlyPayment.value : monthlyPayment;
        const payments = (isRef(duration) ? duration.value : duration) * 12;

        return (monthly * payments).toFixed(2);
    });

    const totalInterest = computed(() => {
        const principal = isRef(total) ? total.value : total;

        return (totalPaid.value - principal);
    });

    return { monthlyPayment, totalPaid, totalInterest };
}
