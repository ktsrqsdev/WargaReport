const BTN = "cursor-pointer inline-flex items-center justify-center gap-1.75 whitespace-nowrap rounded-full border font-semibold";

export const btnPrimary = `${BTN} px-5 py-2.5 text-xs border-(--success) bg-(--success) text-(--light)`;
export const btnOutline = `${BTN} px-5 py-2.5 text-xs border-(--bd-primary) bg-(--bg-secondary) text-(--dark)`;
export const btnModal = `${BTN} w-full px-6 py-3.5 text-[15px] border-(--success) bg-(--success) text-(--light)`;

export const labelClass = "font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)";
export const inputClass =
    "w-full rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-4 py-3 text-sm text-(--dark) placeholder:text-(--disabled2) focus:border-(--green) focus:outline-none focus:ring-4 focus:ring-(--green-20)";
export const inputWrapClass =
    "flex items-center gap-2.5 rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-3.5 focus-within:border-(--green) focus-within:ring-4 focus-within:ring-(--green-20)";
export const inputBareClass = "min-w-0 flex-1 bg-transparent py-3 text-sm text-(--dark) outline-none placeholder:text-(--disabled2)";
