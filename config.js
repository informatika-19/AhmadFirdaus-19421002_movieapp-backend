const requestResponse = {
    gagal: (pesan) =>{
        return{
            sukses: false,
            pesan: pesan
        }
    },
    sukses: (pesan) =>{
        return{
            sukses: true,
            pesan: pesan
        }
    },
    serverError: {
        sukses: false,
        pesan: 'terjadi kesalahan di server kami'
    },
    suksesLogin: (data) => {
        return{
        sukses: true,
        pesan: 'berhasil login',
        data: data
        }
    },
    suksesWithData: (data) => {
        return {
            sukses: true,
            pesan: 'berhasil memuat data',
            data: data
        }
    }
}
module.exports = { requestResponse }
