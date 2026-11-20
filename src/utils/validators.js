export const isValidEmail = email => /^\S+@\S+\.\S+$/.test(email);

export const isValidName = name => /^\p{L}[\p{L} .'-]+$/u.test(name);

export const isValidPhone = phone => /^(\+62|62|0)8\d{8,11}$/.test(phone.replace(/[\s-]/g, ""));

export const isValidNik = nik => /^\d{16}$/.test(nik);

export const isStrongPassword = password => password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password);
