const names = [];
    const act = ['جرعت','حقیقت'];
    //Truth_Questions
    const truth = ['بزرگترین دروغی که گفتی',
    'تاحالا خودتو خراب کردی ؟',
    'کیو توی این جمع دوست داری ؟',
    'تا حالا شده به کسی نیت بد داشته باشی ؟',
    'به خدا اعتقاد داری ؟',
    'خجالت آورترین اتفاق زندگی ات را تعریف کن',
    'به نظرت جذاب ترین مرد / زن این جمع چه کسی است؟',
'عمیق ترین ترس زندگی ات چیست؟',
'بزرگ ترین حسرت زندگی ات چیست؟',
'آیا تا به حال تقلب یا کلاه برداری کرده ای؟ داستانش را تعریف کن',
'بدترین کاری که در مقابل چشم مردم انجام داده ای چه بوده است؟',
'کدام مورد است که بیشتر اطرافیان فکر می کنند درباره تو صحت دارد اما این طور نیست؟',
'اگر به مدت یک ماه جنس مخالف خود بودی چه کارهایی می کردی؟',
'بچه گانه ترین کاری که تا به حال کرده ای چه بوده است؟',
'اگر می خواستی یک نفر از این جمع را به عنوان عشقت انتخاب کنی چه کسی را انتخاب می کردی؟',
'احمقانه ترین اعتیاد یا وابستگی که داری چیست؟',
'ترسناک ترین خوابی که تا به حال دیده ای چه بوده است؟',
'شرم آورترین شی موجود در اتاقت چیست؟',
'آیا تا به حال شکست عشقی خورده ای؟ چه زمانی و چرا؟',
'احمقانه ترین کاری که تا به حال کرده ای چه بوده است؟',
'آیا رازی داری که تا به حال به هیچ کس نگفته باشی؟',
'نفرت انگیزترین عادت تو چیست؟',
'آیا این درست است که (هر چیزی که شما یا گروه درباره آن شک دارید را سوال کنید)',
'به من چیزی بگو که نمی خواهی بدانم',
'شرم آورترین لحظه زندگی ات کدام لحظه بوده است؟',
'آیا تا به حال تحقیر شده ای؟ داستانش را تعریف کن',
'کدام کار است که اگر همه پول های دنیا را هم به تو بدهند انجام نمی دهی؟',
'یکی از رفتارهایت که دوست داری تغییر بدهی چیست؟',
'بدترین شوخی که با کسی داشته ای چه بوده است؟',
'اگر نامرئی باشی اولین کاری که انجام می دهی چیست؟',
'اگر مجبور باشی در یک جزیره به تنهایی با یک نفر زندگی کنی چه کسی را انتخاب می کنی؟',
'احمقانه ترین حرفی که در لحظات عاشقانه به همسرت زده ای چه بوده است؟',
'اسم کسی را بگو که وانمود می کنی دوستش داری اما در واقع چشم دیدنش را نداری',
'دردناک ترین تجربه جسمی ات چه بوده است؟',
'اگر غول چراغ جادو داشته باشی سه آرزویت چیست؟',
'احمقانه ترین کاری که مقابل آینه انجام داده ای چه کاری بوده است؟',
'بیشتر از همه به چه کسی حسادت می کنی؟',
'اگر مطمئن باشی هیچ وقت زندانی نمی شوی دوست داری چه کسی را بکشی؟'];

    //Dare_Questions
    const dare = ['گونه شرکت کننده سمت راست خود را ببوس',
    'به مدت پنج دقیقه پاهای شرکت کننده سمت چپ خود را ماساژ بده',
    'یک قاشق کره بخور',
    'اولین کلمه ای که به ذهنت می رسد را فریاد بزن',
    'تا زمانی که دوباره نوبت تو شود دراز نشست برو',
    'یک آهنگ را با آواز تا انتها بخوان',
    'با تمام لباس هایی که به تن داری دوش بگیر',
    'به یکی از شرکت کنندگان اجازه بده کلمه ای روی پیشانی ات بنویسد و تا آخر بازی آن را پاک نکن',
    'یک قطعه یخ در شلوار خود قرار بده و صبر کن تا آب شود',
    'ده بار دور خودت بگرد، بعد از آن سعی کن در خط مستقیم راه بروی',
    'یک دقیقه کامل پلک نزن',
    'پنج قاشق از یک چاشنی غذایی بخور',
    'اجازه بده گروه مدل موی جدیدی برایت درست کنند (کوتاه کردن یا درست کردن موها)',
    'زیر بغل شرکت کننده سمت راست خود را بو کن',
    'با آهنگ انتخابی گروه برقص',
    'اجازه بده شرکت کننده ها تو را آرایش کنند (مخصوص پسرها)',
    'آرایشت را پاک کن (مخصوص دخترها)',
    'به مدت یک دقیقه بدون موسیقی برقص',
    'بگذار گروه تو را در وضعیت خنده دار قرار داده و از تو عکس بگیرند',
    'تلفن همراه خود را به یکی از شرکت کنندگان بده تا یک پیام برای هر کسی که در لیست تماس ها است ارسال کند',
    'یک فنجان از معجونی که شرکت کنندگان تهیه کرده اند بنوش (در تهیه معجون نباید از مواد مضر استفاده شود)',
    'کاری کن تا شرکت کننده سمت راستت از خنده روده بر شود',
    'اجازه بده گروه به مدت یک دقیقه به داخل تلفن همراهت سرک بکشند',
    'دست خود را تا آرنج داخل سطل زباله فرو ببر',
    'با دست های خود از یک طرف اتاق به طرف دیگر برو، بهتر است یکی از شرکت کنندگان پاها را بالا نگه دارد',
    'یکی از شرکت کنندگان را انتخاب کن تا به تو سیلی بزند',
    'به مدت سه دقیقه یک حلقه خیالی دور کمر خود بچرخان',
    'کاغذ شکلات را تنها با استفاده از دهان خود باز کن',
    'با هفتمین شماره در تلفن همراه خود تماس گرفته و به مدت 30 ثانیه آهنگی که گروه انتخاب کرده را برایش بخوان',
    'یکی از شرکت کنندگان تو را قلقلک بدهد و سعی کن نخندی',
    'عکس کارت ملی جدیدت را در پروفایل خود قرار بده',
    'گروه یک شی انتخاب می کند تا با آن دندان های خود را مسواک بزنی',
    'نام خود را با زبان روی زمین بنویس',
    'مقداری عسل روی بینی خود مالیده و روی آن را با آرد بپوشان',
    'چشمان خود را ببند و اجازه بده سایر شرکت کنندگان ماده غذایی دلخواهی از یخچال برداشته و داخل دهانت بگذارند',
    'کیف، کوله پشتی و کیف پول خود را خالی کن تا سایر شرکت کنندگان ببینند'];


function add_User(){
  const input = document.querySelector('input');
  const adding_btn = document.getElementById('adding_btn');
  const name = document.getElementById('input').value;
  const show = document.getElementById('users_List');
if(name != ""){
          names.push(name);
          show.innerHTML = names;
          if(names.length == 5){
              input.style.display = 'none';
              adding_btn.style.display = 'none';
          }
          document.getElementById('input').value = "";
}else{
          alert("Name can't be empty!\n نام نمیتواند خالی باشد");
}
}


function spin(){
if(names.length != 0){
          const DoThis = act[Math.floor(Math.random() * act.length)];
          const rand_Name = names[Math.floor(Math.random() * names.length)];
          const dareQ = dare[Math.floor(Math.random() * dare.length)];
          const truthQ = truth[Math.floor(Math.random() * truth.length)];
      
      
          input.style.display = 'none';
            adding_btn.style.display = 'none';
      
          if(DoThis == act[0]){
          document.getElementById('p').innerHTML = rand_Name + " ("+DoThis+")";
          document.getElementById('rule').innerHTML =dareQ;
      
      }else if(DoThis == act[1]){
          document.getElementById('p').innerHTML = rand_Name + " ("+DoThis+")";
          document.getElementById('rule').innerHTML =truthQ;
      }
}else{
          alert("Please add at least 1 name.\n حداقل یک نام اجباریست");
}
}
function show_info(){
    alert("------ Developer : Reza Kamali ------\nadd up to 5 players then spin the bottle and enjoy 😉");
}