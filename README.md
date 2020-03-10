# Review Materi
## Object Oriented Programmming
OOP (Object Oriented Programming) adalah suatu metode pemrograman yang berorientasi kepada objek. Tujuan dari OOP diciptakan adalah untuk mempermudah pengembangan program dengan cara mengikuti model yang telah ada di kehidupan sehari-hari. Jadi setiap bagian dari suatu permasalahan adalah objek, nah objek itu sendiri merupakan gabungan dari beberapa objek yang lebih kecil lagi.

Contohnya Pesawat, Pesawat adalah sebuah objek. Pesawat itu sendiri terbentuk dari beberapa objek yang lebih kecil lagi seperti mesin, roda, baling-baling, kursi, dll. Pesawat sebagai objek yang terbentuk dari objek-objek yang lebih kecil saling berhubungan, berinteraksi, berkomunikasi dan saling mengirim pesan kepada objek-objek yang lainnya. Begitu juga dengan program, sebuah objek yang besar dibentuk dari beberapa objek yang lebih kecil, objek-objek itu saling berkomunikasi, dan saling berkirim pesan kepada objek yang lain.

### 1. Class
Class merupakan sebuah cetak biru / blueprint untuk menciptakan sebuah object. class juga untuk mendefinisikan karakter dan perilaku dari object. yang merupakan kumpulan atas definisi dan fungsi-fungsi / method dalam suatu unit, untuk suatu tujuan tertentu.

Pembuatan class 

```
class Human{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    
    printAll(){
        return console.log(`hello my name ${this.name} and my age ${this.age}`)
    }
}
const newHuman = new Human('sandy', 22)
newHuman.printAll()
```

Di dalam kelas ada beberapa attribut penting di dalamnya yaitu:
- Constructor
Adalah sebuah method yang pertama kali dijalankan ketika object dibuat. misalnya pada contoh diatas, ketika `const newHuman = new Human('sandy', 22)` dijalankan, maka method constructor yang pertama dijalankan, didalam constructor method akan mengisi property name dan age.
- Property
Adalah sebuah data yang disimpan didalam sebuah object. misalnya pada contoh diatas yakni `this.name` dan `this.age`. Property dapat diakses oleh method apapun selama masih dalam satu object.
- Class Method
Adalah method/function yang ada di dalam sebuah object, dan untuk menggunakannya class harus di instance terlebih dahulu menjadi object baru bisa dijalankan. misalnya method `printAll()` kita harus meng instance terlebih dahulu object nya.
- Static Method
Adalah method yang sama seperti class method, tetapi untuk menjalankannya tidak perlu meng instance class

### 2. Static Method
Adalah sebuah method yang dapat dipanggil tanpa perlu melakukkan instance class dari method tersebut. 
Contoh 
```
class Human{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    
    printAll(){
        return console.log(`hello my name ${this.name} and my age ${this.age}`)
    }

    static printNewOne(){
        return new Human('andi', 30);
    }
}


const newHuman = Human.printNewOne()
newHuman.printAll();

```
### 3. Method Chaining
Method chaining merupakan salah satu konsep yang ada dalam paradigma OOP untuk mengikat / merantai method. Disini kita dapat memanggil lebih dari satu method untuk satu kali operasi dengan mengolah object yang sama. Setiap method tersebut berperan mengubah nilai property dalam object tersebut dari satu bentuk ke bentuk lainnya. Oleh karena itu method tersebut sering disebut mutator.
```
class Komik {
	constructor(judul) {
		this.judul = judul;
	}

	setPenulis(penulis) {
		this.penulis = penulis;
		return this;
	}

	setPenerbit(penerbit) {
		this.penerbit = penerbit;
		return this;
	}

	printKomik() {
		console.log(this.judul, this.penulis, this.penerbit);
	}
}

const komik = new Komik('naruto');
komik.setPenulis('Masashi Kishimoto').setPenerbit('Shonen Jump').printKomik();

```
### 4. Encapsulation
Enkapsulasi(encapsulation) adalah sebuah metode untuk mengatur struktur class dengan cara menyembunyikan alur kerja dari class tersebut. Struktur class yang dimaksud adalah property dan method. Dengan enkapsulasi, kita bisa membuat pembatasan akses kepada property dan method, sehingga hanya property dan method tertentu saja yang bisa diakses dari luar class. Enkapsulasi juga dikenal dengan istilah ‘information hiding’.

```
class Person {
	constructor() {}

	setName(name, age) {
		this.name = name;
		this.age = age;
	}
	getAll() {
		return console.log(`Halo nama saya ${this.name}, umur saya ${this.age}`);
	}
}

const person1 = new Person();

person1.setName('sandy', 22);
person1.getAll();

```
### 5. Inheritance
Inheritance atau Pewarisan/Penurunan adalah konsep pemrograman dimana sebuah class dapat ‘menurunkan’ property dan method yang dimilikinya kepada class lain. Konsep inheritance digunakan untuk memanfaatkan fitur ‘code reuse’ untuk menghindari duplikasi kode program.
```
class Produk {
	constructor(judul, penulis, penerbit) {
		this.judul = judul;
		this.penulis = penulis;
		this.penerbit = penerbit;
	}
}

class Komik extends Produk {
	constructor(judul, penulis, penerbit, halaman) {
		super(judul, penulis, penerbit);
		this.halaman = halaman;
	}

	printKomik() {
		return console.log(
			`judul : ${this.judul}, penulis : ${this.penulis}, penerbit : ${this.penerbit}, halaman:${this.halaman}`
		);
	}
}

const komikbaru = new Komik('Naruto', 'Masashi kishimoto', 'Shonen jump', 40);
komikbaru.printKomik();

```
### 6. Polymorphism
Polymorphism adalah Mengubah sebuah method dari suatu subclass yang berbeda dengan superclass.
```
class Human {
	constructor(name) {
		this.name = name;
	}

	printAll() {
		console.log(this.name);
	}
}

class Programmer extends Human {
	constructor(name, ability) {
		super(name);
		this.ability = ability;
	}
}

const newProgrammer = new Programmer('sandy', 'java');
Human.prototype.printAll = () => {
	console.log(`Hello my name is ${newProgrammer.name} my ability is ${newProgrammer.ability}`);
};
newProgrammer.printAll();

```

## Design Pattern
Design pattern merupakan sebuah prosedural dalam pengembangan aplikasi yang menjadi solusi dalam permasalahan secara umum. design pattern ini hanya menjadi sebuah template, bukan sebuah code akhir untuk segera di eksekusi.
Beberapa jenis design pattern :
- Separation of concern
- Factory pattern
- Adaptern pattern

### Separation of concern
Design pattern yang membagi program dalam project menjadi bagian yang berbeda beda sehingga setiap bagian membahas masalah yang terpisah dengan bagian yang lain, contoh (Model View Controller).
- Model
- View
- Controller

### Factory pattern
Design pattern yang mempunyai ketergantungan pada class lain tanpa harus diketahui cara pembuatan dari class tersebut
### Adaptern pattern
Design pattern yang dalam satu class mempunyai banyak karakteristik yang berbeda pada sebuah property member yang sama.

## NPM
NPM (Node Package Manager) adalah sebuah tools untuk membantu mengelola package yang dipakai dalam pengembangan project Node Js dan NPM juga tempat untuk berbagi package kepada orang lain. NPM akan otomatis terinstal ketika kita menginstal node js.

### Inisialisasi project dengan NPM
Pertama, kita membuat folder baru yang akan kita gunakan untuk project.
untuk linux bisa menggunakan command
```
mkdir <nama_folder>
```
selanjutnya, masuk ke dalam folder tersebut, lalu lakukan inisialisasi dengan perintah npm init.
```
cd <nama_folder> //Masuk kedalam folder
npm init //inisialisasi project.
```
selanjutnya, npm akan meminta kita mengisi data project yang akan kita buat.

### Package json
Adalah sebuah file yang otomatis tergenerate setelah kita melakukkan perintah npm init. Package JSON berisikan informasi dari project Node JS, termasuk author, url-git, nama project, deskripsi project, module yang dipakai didalam project baik dalam lingkup development atau production. 
contoh file package.json
```
{
  "name": "latihan",
  "version": "1.0.0",
  "description": "latihan inisialiasi npm",
  "main": "baru.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "sandy",
  "license": "ISC"
}
```
### Install Third Library
Untuk menginstall library dari luar, kita bisa menggunakan perintah `npm i nama_package` untuk lingkup production, sedangkan `npm i nama_package --save-dev` untuk lingkup development dan `npm i nama_package --save-g` untuk lingkup global.

### Node Modules
Sebuah folder yang berisikan file library yang diinstall melalui NPM. Folder ini harus dimasukkan ke dalam file .gitignore karena folder tersebut tidak perlu diupload di remote. 

### Using Third Library
Untuk menggunakan package, biasakan untuk membaca dokumentasi dari package tersebut, misalnya untuk axios https://www.npmjs.com/package/axios

### Remove Third Library
untuk menghapus library pihak ketiga bisa dengan melakukan perintah npm un package_name atau npm un package_name -g untuk third library yang bersifat global.

### Npm Common Command
Perintah yang umum dijalankan pada NPM:
- npm i package_name
- npm i package_name1 package_name2
- npm un package_name
- npm un package_name1 package_name2
- npm up
- npm up package_name
- npm up -g
- npm list
- npm help
untuk lebih jelas nya bisa dicek pada dokumentasi npm https://docs.npmjs.com/

## Command Line Interface
CLI (Command line interface) adalah sebuah mekanisme untuk melakukan interaksi dengan program dengan menggunakan sebuah teks untuk menjalankan tugas tertentu.  Dalam berinteraksi dengan sistem operasi pengguna hanya dapat menggunakan keyboard dengan cara mengetikan perintah (Command) tertentu.

### Unix Philosophy
Sebuah norma atau aturan dalam pengembangan aplikasi software yang minimalis.
- Setiap program melakukan satu hal dengan baik.
- Lakukan percobaan di awal sewaktu mendesain atau membangun sebuah program.
- Pilih tools yang lebih disukai daripada tools yang tidak baik dalam meringankan program yang dibuat.

### Build Command Line App
Ada beberapa package yang membantu dalam pengembangan aplikasi command line pada nodejs, antara lain, caporal, commander, yargs dll.

### Caporal
Untuk membuat project dengan caporal gunakan perintah
```
npm init
npm i caporal
```

Implementasi pada nodejs
```
const cli = require('caporal');

cli
    .version('1.0.0')
    .description('description about CLI-APP')
    .action((args, option, logger) => {
        logger.info('hello world');
    });
cli.parse(process.argv);
```








