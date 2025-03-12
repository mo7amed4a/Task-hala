import Link from "./Link";

export const Navigation = () => {


  return (
      <div>
        <div className="px-4 py-2 text-xs text-[#303030]">القائمة</div>
        <div className="flex flex-col space-y-0.5">
          <Link title="لوحة التحكم" current>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3333 7.10001V3.31667C18.3333 2.14167 17.8 1.66667 16.475 1.66667H13.1083C11.7833 1.66667 11.25 2.14167 11.25 3.31667V7.09167C11.25 8.27501 11.7833 8.74167 13.1083 8.74167H16.475C17.8 8.75 18.3333 8.27501 18.3333 7.10001Z" stroke="#362976" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z" stroke="#362976" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.74996 7.10001V3.31667C8.74996 2.14167 8.21663 1.66667 6.89163 1.66667H3.52496C2.19996 1.66667 1.66663 2.14167 1.66663 3.31667V7.09167C1.66663 8.27501 2.19996 8.74167 3.52496 8.74167H6.89163C8.21663 8.75 8.74996 8.27501 8.74996 7.10001Z" stroke="#362976" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.74996 16.475V13.1083C8.74996 11.7833 8.21663 11.25 6.89163 11.25H3.52496C2.19996 11.25 1.66663 11.7833 1.66663 13.1083V16.475C1.66663 17.8 2.19996 18.3333 3.52496 18.3333H6.89163C8.21663 18.3333 8.74996 17.8 8.74996 16.475Z" stroke="#362976" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link title="الليدز">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3083 7.39999H14.6834" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.31665 7.39999L5.94165 8.02499L7.81665 6.14999" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.3083 13.2333H14.6834" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.31665 13.2333L5.94165 13.8583L7.81665 11.9833" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.49996 18.3333H12.5C16.6666 18.3333 18.3333 16.6667 18.3333 12.5V7.50001C18.3333 3.33334 16.6666 1.66667 12.5 1.66667H7.49996C3.33329 1.66667 1.66663 3.33334 1.66663 7.50001V12.5C1.66663 16.6667 3.33329 18.3333 7.49996 18.3333Z" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link title="الطلبات" >
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49996 18.3333H12.5C16.6666 18.3333 18.3333 16.6667 18.3333 12.5V7.49999C18.3333 3.33332 16.6666 1.66666 12.5 1.66666H7.49996C3.33329 1.66666 1.66663 3.33332 1.66663 7.49999V12.5C1.66663 16.6667 3.33329 18.3333 7.49996 18.3333Z" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.58325 7.71667L9.99991 10.275L14.3833 7.73334" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.99988 14.8083V10.2667" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.96663 5.24166L6.29996 6.72499C5.69996 7.05833 5.19995 7.89999 5.19995 8.59166V11.4167C5.19995 12.1083 5.69162 12.95 6.29996 13.2833L8.96663 14.7667C9.5333 15.0833 10.4666 15.0833 11.0416 14.7667L13.7083 13.2833C14.3083 12.95 14.8083 12.1083 14.8083 11.4167V8.58333C14.8083 7.89166 14.3166 7.04999 13.7083 6.71666L11.0416 5.23332C10.4666 4.91666 9.5333 4.91666 8.96663 5.24166Z" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link title="سوق هلا" arrowIcon>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.38642 9.72336H0.5V0.5H19.5V19.5H12.349C12.3074 19.3883 12.2651 19.2785 12.2235 19.1714C12.2173 19.1511 12.2108 19.1345 12.2061 19.123C11.6387 17.434 10.8657 15.8823 9.88642 14.4662V10.2234V9.72336H9.38642Z" stroke="#303030" />
            </svg>
          </Link>
          <Link title="منتجاتي" >
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.64172 6.19998L10 10.4583L17.3084 6.22496" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 18.0083V10.45" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.27501 2.06666L3.82502 4.54168C2.81668 5.10002 1.9917 6.5 1.9917 7.65V12.3584C1.9917 13.5084 2.81668 14.9083 3.82502 15.4667L8.27501 17.9417C9.22501 18.4667 10.7833 18.4667 11.7333 17.9417L16.1834 15.4667C17.1917 14.9083 18.0167 13.5084 18.0167 12.3584V7.65C18.0167 6.5 17.1917 5.10002 16.1834 4.54168L11.7333 2.06666C10.775 1.53332 9.22501 1.53332 8.27501 2.06666Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.1666 11.0333V7.98336L6.2583 3.41666" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
          </Link>
          <Link title="الحسابات والفواتير" arrowIcon>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 7H16" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 11H15" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link title="الإحصائيات" >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.32 12C20.92 12 22 11 21.04 7.72C20.39 5.51 18.49 3.61 16.28 2.96C13 2 12 3.08 12 5.68V8.56C12 11 13 12 15 12H18.32Z" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.0001 14.7C19.0701 19.33 14.6301 22.69 9.58005 21.87C5.79005 21.26 2.74005 18.21 2.12005 14.42C1.31005 9.39001 4.65005 4.95001 9.26005 4.01001" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        <div className="px-4 py-2 text-xs text-[#303030] mt-2">المساعدة</div>
          <Link title="الدعم الفني" >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z" stroke="#303030" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 9.16003C7 8.23003 7.76 7.46997 8.69 7.46997C9.62 7.46997 10.38 8.23003 10.38 9.16003C10.38 11.04 7.71 11.24 7.12 13.03C7 13.4 7.31 13.77 7.7 13.77H10.38" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.04 13.76V8.05003C16.04 7.79003 15.87 7.55997 15.62 7.48997C15.37 7.41997 15.1 7.51997 14.96 7.73997C14.24 8.89997 13.46 10.22 12.78 11.38C12.67 11.57 12.67 11.82 12.78 12.01C12.89 12.2 13.1 12.3199 13.33 12.3199H17" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg> 
          </Link>
          <Link title="الإعدادات" >
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1.66663 10.7334V9.2667C1.66663 8.40003 2.37496 7.68336 3.24996 7.68336C4.75829 7.68336 5.37496 6.6167 4.61663 5.30836C4.18329 4.55836 4.44163 3.58336 5.19996 3.15003L6.64163 2.32503C7.29996 1.93336 8.14996 2.1667 8.54163 2.82503L8.63329 2.98336C9.38329 4.2917 10.6166 4.2917 11.375 2.98336L11.4666 2.82503C11.8583 2.1667 12.7083 1.93336 13.3666 2.32503L14.8083 3.15003C15.5666 3.58336 15.825 4.55836 15.3916 5.30836C14.6333 6.6167 15.25 7.68336 16.7583 7.68336C17.625 7.68336 18.3416 8.3917 18.3416 9.2667V10.7334C18.3416 11.6 17.6333 12.3167 16.7583 12.3167C15.25 12.3167 14.6333 13.3834 15.3916 14.6917C15.825 15.45 15.5666 16.4167 14.8083 16.85L13.3666 17.675C12.7083 18.0667 11.8583 17.8334 11.4666 17.175L11.375 17.0167C10.625 15.7084 9.39163 15.7084 8.63329 17.0167L8.54163 17.175C8.14996 17.8334 7.29996 18.0667 6.64163 17.675L5.19996 16.85C4.44163 16.4167 4.18329 15.4417 4.61663 14.6917C5.37496 13.3834 4.75829 12.3167 3.24996 12.3167C2.37496 12.3167 1.66663 11.6 1.66663 10.7334Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="pt-4">
            <Link title="تسجيل الخروج" logout>
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4399 14.62L19.9999 12.06L17.4399 9.5" stroke="#E20D0D" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.76001 12.06H19.93" stroke="#E20D0D" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4" stroke="#E20D0D" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    )
} 
