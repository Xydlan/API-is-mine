const fs = require('fs');
const mongoose = require('mongoose'); // Pastikan mongoose sudah di-install

// Variabel global
global.creator = 'Xydlan'; // nama Anda
global.MONGO_DB_URI = "mongodb+srv://Xydlan:VLKlw4XkEQQhu1sW@cluster0.m2xjo.mongodb.net/?retryWrites=true&w=majority"; // String koneksi yang sudah di-encode
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10"; // isi apa saja bebas
global.your_email = "dheriap248@gmail.com"; // email
global.email_password = "xydlan lux official"; // password aplikasi email
global.limitCount = 10000;
global.YOUR_PORT = 8000; // Typo diperbaiki

global.loghandler = {
    noapikey: {
        status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
        status: 403,
        message: 'Forbiden, Invalid apikey',
        creator: `${creator}`
    },
    noturl: {
        status: 403,
        message: 'Forbiden, Invlid url, masukkan parameter url',
        creator: `${creator}`,
    }
};

// Debugging koneksi MongoDB
async function connectToMongoDB() {
    try {
        await mongoose.connect(global.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB terhubung dengan sukses');
    } catch (error) {
        console.error('Error koneksi MongoDB:', error.message);
        process.exit(1); // Keluar dari proses jika koneksi gagal
    }
}

// Panggil fungsi koneksi MongoDB
connectToMongoDB();

// Debugging file watch
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`File '${__filename}' diperbarui. Memuat ulang...`);
    delete require.cache[file];
    require(file);
});
