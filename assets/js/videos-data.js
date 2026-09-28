/**
 * คลังข้อมูลคำพยานชีวิต - คริสตจักรนิวไวน์อุดรธานี
 * "พระเจ้ามีจริงและช่วยคุณได้"
 */

const TESTIMONY_CATEGORIES = {
  all: {
    id: 'all',
    name: 'ทั้งหมด',
    icon: 'sparkles',
    description: 'คำพยานชีวิตจริงทั้งหมด 24 เรื่องราว'
  },
  business: {
    id: 'business',
    name: 'การเงินการงาน & ชีวิตส่วนตัว',
    shortName: 'การเงินการงาน & ชีวิตส่วนตัว',
    icon: 'trending-up',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    description: 'การอวยพรและการเปิดทางในหน้าที่การงาน ปลดหนี้ และความสำเร็จที่มาจากพระเจ้า'
  },
  deliverance: {
    id: 'deliverance',
    name: 'ช่วยกู้และเปลี่ยนแปลงชีวิต',
    shortName: 'ช่วยกู้ & เปลี่ยนชีวิต',
    icon: 'heart-handshake',
    badgeClass: 'bg-red-50 text-red-700 border-red-200',
    description: 'รอดพ้นจากความมืด พันธนาการ สิ่งเสพติด และการกลับใจสู่ชีวิตใหม่ในพระคริสต์'
  },
  healing: {
    id: 'healing',
    name: 'การรักษาจากพระเจ้า',
    shortName: 'การรักษาโรค',
    icon: 'activity',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'การรักษาอัศจรรย์ โรคร้าย มะเร็ง อาการป่วยเรื้อรัง และโรคซึมเศร้าหายขาด'
  }
};

const TESTIMONIES_DATA = [
  // หมวด 1: การอวยพรธุรกิจ,การเงิน,การงาน,ชีวิตส่วนตัว (11 คลิป)
  {
    id: "mPVWkvG8wKw",
    category: "business",
    title: "จาก 1,000 สู่ 1,000,000 !!",
    person: "คุณคริสติน",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "",
    keyQuote: "",
    duration: "YouTube"
  },
  {
    id: "TgZ9fhop-y8",
    category: "business",
    title: "ขายดี..จนต้องอิจฉา ☕️",
    person: "คุณฉี",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "ธุรกิจร้านกาแฟ & ยอดขายพุ่ง",
    keyQuote: "เคล็ดลับการค้าขายที่ไม่ต้องพึ่งโชคลาภ แต่พึ่งพาพระพรอันล้นพ้นของพระเจ้า",
    duration: "YouTube"
  },
  {
    id: "yuzain32jgg",
    category: "business",
    title: "จากเงินเหลือ 0 บาท สู่การช่วยเหลือของพระเจ้า",
    person: "คุณนิตยา รัตนวงศ์",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "หมดตัวเหลือ 0 สู่ทางออก",
    keyQuote: "เมื่อมนุษย์หมดหนทาง แต่พระเจ้าทรงเริ่มต้นเปิดประตูแห่งการจัดเตรียม",
    duration: "YouTube"
  },
  {
    id: "oOHbyYRoYUs",
    category: "business",
    title: "ลูกฉันปัง ทรงพลัง พระเจ้าช่วย !",
    person: "คุณพรจิตต์",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "พระพรอบครัว & การงานลูก",
    keyQuote: "",
    duration: "YouTube"
  },
  {
    id: "Lg5ueVSG-0g",
    category: "business",
    title: "สำเร็จ เกิดผลได้ขนาดนี้เพราะความเก่ง..จริงหรือ ?",
    person: "คุณต้น",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "ความสำเร็จที่แท้จริง",
    keyQuote: "เมื่อวางความหยิ่งและมอบความไว้วางใจให้พระเจ้า นำทางสู่ผลลัพธ์ที่ยิ่งใหญ่",
    duration: "YouTube"
  },
  {
    id: "FJ-sF6IEdDc",
    category: "business",
    title: "ไม่เคยได้ แต่กลับได้โบนัส !!",
    person: "คุณเน้ย",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "โบนัสพิเศษ & ความก้าวหน้างาน",
    keyQuote: "ความสัตย์ซื่อในหน้าที่การงาน และพระเจ้าทรงยกชูในเวลาอันเหมาะสม",
    duration: "YouTube"
  },
  {
    id: "ZXo5cFlbgy8",
    category: "business",
    title: "เคล็ดลับ!! ได้ทุกอย่างที่ต้องการ",
    person: "ครูแอน",
    branch: "นิวไวน์กรุงเทพฯ",
    highlight: "การดำเนินชีวิตด้วยความเชื่อ",
    keyQuote: "จงแสวงหาแผ่นดินของพระเจ้าและความชอบธรรมของพระองค์ก่อน แล้วทุกสิ่งจะเพิ่มเติมให้",
    duration: "YouTube"
  },
  {
    id: "PuMo63CGW2g",
    category: "business",
    title: "บินลัดฟ้าเป็นพร ข้ามทวีป",
    person: "น้องบุ้งกี๋",
    branch: "นิวไวน์กรุงเทพฯ",
    highlight: "โอกาสต่างประเทศ & การศึกษา",
    keyQuote: "พระเจ้าเปิดประตูการเดินทางข้ามทวีปที่เกินความคาดหมาย",
    duration: "YouTube"
  },
  {
    id: "B1q6dM5WZDM",
    category: "business",
    title: "อัศจรรย์พันชั่วโคตร 🔥",
    person: "คุณวีวี่",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "พระพรอันยั่งยืนถึงลูกหลาน",
    keyQuote: "พันธสัญญาแห่งพระพรของพระเจ้าที่ไหลรินลงมาสู่ชีวิตและครอบครัว",
    duration: "YouTube"
  },
  {
    id: "Pz6ooTFiPHo",
    category: "business",
    title: "สันติสุขเกิดขึ้นได้ทุกที่ เมื่อมีพระองค์",
    person: "คุณสันติ",
    branch: "นิวไวน์อุดรธานี",
    highlight: "สันติสุขแท้ในชีวิตประจำวัน",
    keyQuote: "ท่ามกลางพายุของโลก พระเยซูประทานสันติสุขที่เงินทองซื้อไม่ได้",
    duration: "YouTube"
  },
  {
    id: "chINH4YJnmY",
    category: "business",
    title: "คะแนนแย่แต่อยากได้ที่ 1 พระเจ้าช่วยหนูได้เมื่อขอ",
    person: "น้องนก",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "การเรียน & สติปัญญาจากพระเจ้า",
    keyQuote: "เมื่อหนูทูลขอด้วยใจจริง พระองค์ประทานสติปัญญาและความเข้าใจให้",
    duration: "YouTube"
  },

  // หมวด 2: พระเจ้าเข้ามาช่วยกู้และเปลี่ยนแปลงชีวิต (7 คลิป)
  {
    id: "-dqK2eC4tZQ",
    category: "deliverance",
    title: "สัมพันธ์ดี...เมื่อผีออก (รอดจากพันธนาการ)",
    person: "คุณวิคกี้",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "ปลดปล่อยสู่เสรีภาพ & ความสัมพันธ์",
    keyQuote: "การปลดปล่อยแท้จริงเกิดขึ้นเมื่อพระเยซูเข้ามาเป็นองค์พระผู้ช่วยให้รอด",
    duration: "YouTube"
  },
  {
    id: "GgAbueBKv6g",
    category: "deliverance",
    title: "บ้านแตก..แต่พระเจ้าสร้างให้ใหม่ 🏠",
    person: "คุณเอ็ม",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "ฟื้นฟูครอบครัวที่แตกสลาย",
    keyQuote: "ความรักของพระเจ้าสามารถเยียวยาบาดแผลและสร้างครอบครัวขึ้นใหม่ได้เสมอ",
    duration: "YouTube"
  },
  {
    id: "MdJkGciqVQw",
    category: "deliverance",
    title: "พระเจ้ามา คาถา..พัง !",
    person: "คุณบัว",
    branch: "นิวไวน์อุดรธานี",
    highlight: "หลุดพ้นจากไสยศาสตร์ & วิญญาณชั่ว",
    keyQuote: "พระนามของพระเยซูอยู่เหนือนามทั้งปวง อำนาจมืดทั้งสิ้นต้องพ่ายแพ้ต่อพระองค์",
    duration: "YouTube"
  },
  {
    id: "_T4jj1PYL0c",
    category: "deliverance",
    title: "เป็นไปได้ไง..นักเลงกลายเป็นนักรัก",
    person: "คุณเฟเวอร์",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "เปลี่ยนหัวใจ & นิสัยใหม่",
    keyQuote: "หัวใจที่แข็งกระด้างและอารมณ์รุนแรง ถูกละลายด้วยความรักอันไม่มีเงื่อนไข",
    duration: "YouTube"
  },
  {
    id: "i2d5zLazH10",
    category: "deliverance",
    title: "เมื่อถูกปกป้องจากผี จนมองไม่เห็น",
    person: "คุณไอจิ",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "การปกป้องคุ้มครองอัศจรรย์",
    keyQuote: "พระเยซูทรงกางปีกปกป้องผู้ที่ไว้วางใจในพระองค์ ให้ปลอดภัยในทุกสถานการณ์",
    duration: "YouTube"
  },
  {
    id: "0QeLkD_0y0s",
    category: "deliverance",
    title: "รอดได้เพราะพระเจ้า! เพราะฟังคำพยาน",
    person: "คุณจัสมิน",
    branch: "นิวไวน์กรุงเทพฯ",
    highlight: "",
    keyQuote: "",
    duration: "YouTube"
  },
  {
    id: "WztR6wOiht0",
    category: "deliverance",
    title: "รอดจากตาย..พระเจ้าช่วยได้ !",
    person: "คุณปอนด์",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "รอดชีวิตจากช่วงเวลาวิกฤต",
    keyQuote: "ในเสี้ยววินาทีแห่งความเป็นความตาย พระองค์ทรงยื่นพระหัตถ์มาฉุดดึงขึ้นมา",
    duration: "YouTube"
  },

  // หมวด 3: การรักษาจากพระเจ้า (6 คลิป)
  {
    id: "j-xqmwOqxYs",
    category: "healing",
    title: "เหลือเชื่อ ไม่มีแรง เหนื่อยง่าย มาเป็นปีๆ แก้ด้วยวิธีนี้ !",
    person: "คุณเกย่าห์",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "ฟื้นฟูกำลังเรื้อรัง",
    keyQuote: "อาการอ่อนเพลียที่หมดทางรักษา กลับมาแข็งแรงสดชื่นด้วยการอธิษฐานเชื่อ",
    duration: "YouTube"
  },
  {
    id: "EVnKtYJQ52M",
    category: "healing",
    title: "หายโรคในนามพระเยซู",
    person: "คุณเอ๋",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "หายโรคอัศจรรย์",
    keyQuote: "บาดแผลที่พระวรกายของพระเยซู ทำให้เราได้รับการรักษาให้หายดี",
    duration: "YouTube"
  },
  {
    id: "oWQHO40r1tk",
    category: "healing",
    title: "รอดมา 4 ครั้ง ไม่ตาย ! มีชีวิตอยู่ต่อ…เพื่อพระเจ้าได้รับเกียรติ",
    person: "คุณรินทร์",
    branch: "นิวไวน์อุดรธานี",
    highlight: "รอดชีวิต 4 ครั้งซ้อน",
    keyQuote: "ชีวิตนี้ไม่ได้อยู่ด้วยความบังเอิญ แต่อยู่เพราะพระคุณและพระประสงค์ของพระเจ้า",
    duration: "YouTube"
  },
  {
    id: "9iqdMk5AXSU",
    category: "healing",
    title: "มะเร็งระยะที่ 4 หายได้... เพียงแค่เปิดใจเชื่อ!",
    person: "คุณแอนนี่",
    branch: "นิวไวน์กรุงเทพ",
    highlight: "มะเร็งระยะ 4 หายขาด",
    keyQuote: "แม้คนอื่นจะบอกว่าไม่มีหวัง แต่สำหรับพระเจ้า ไม่มีสิ่งหนึ่งสิ่งใดที่พระองค์ทำไม่ได้",
    duration: "YouTube"
  },
  {
    id: "ZaGVOM46DxA",
    category: "healing",
    title: "ไม่คาดคิด! อุบัติเหตุกระดูกหักใช้ไม้เท้า แค่ 4 วัน อัศจรรย์จากพระเจ้า",
    person: "คุณโอ๊ต",
    branch: "นิวไวน์กรุงเทพฯ",
    highlight: "กระดูกหักสมานใน 4 วัน",
    keyQuote: "การฟื้นตัวที่รวดเร็วเกินกว่าคำอธิบายทางการแพทย์ พระหัตถ์พระเจ้าสัมผัสตรงจุด",
    duration: "YouTube"
  },
  {
    id: "sf9sw3IAJiA",
    category: "healing",
    title: "ซึมเศร้า...ต้องหาย เป็นไปได้ จริงหรือ...?",
    person: "คุณตั้ม",
    branch: "นิวไวน์กรุงเทพฯ",
    highlight: "หลุดพ้นจากโรคซึมเศร้า",
    keyQuote: "ความมืดมิดในจิตใจถูกแทนที่ด้วยความสว่าง สันติสุข และความชื่นชมยินดีที่แท้จริง",
    duration: "YouTube"
  }
];

// Export to global scope
if (typeof window !== 'undefined') {
  window.TESTIMONY_CATEGORIES = TESTIMONY_CATEGORIES;
  window.TESTIMONIES_DATA = TESTIMONIES_DATA;
}
