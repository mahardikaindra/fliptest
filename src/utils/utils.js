export const formatingBankName = (name) => {
  if (name.length <= 4) {
    return name.toUpperCase();
  } else {
    const words = name.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    words.join(" ");
    return words;
  }
}

export const formatingDate = (date) => {
  const bulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]
  const slicing = date.slice(0,10);
  const format = new Date(slicing);
  const day = format.getDate();
  const month = format.getMonth();
  const year = format.getFullYear();
  return `${day} ${bulan[month]} ${year}`;
}

export const formatRupiah = (number) => {
  const num = Number(number)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$&.");

  return `Rp${num}`;
};

export const formatingStatus = (status) => {
  if (status === 'SUCCESS') {
    return 'Berhasil';
  } else if (status === 'PENDING') {
    return 'Pengecekan';
  } else {
    return 'Gagal';
  }
}
