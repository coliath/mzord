import React, { useState } from 'react';
import Plan from '../views/plan.jsx';

export default function PlanType (props) {

  const [page, setPage]= useState('planType');

  let pageComponent = (<PlanType />);
  if (page === 'plan') {
    pageComponent = (<Plan />);
  }

  return (
    <div className="mx-auto my-24">
      <div className='card p-12 pb-24 w-1/2 mx-auto'>
        <div className="text-center">
          <img src="/assets/icons/doc.png" className="mx-auto" alt="doc" />
          <p className="mt-4 text-3xl font-bold text-qpTwilight">
            How would you like to build your Comp Plan?
          </p>
        </div>
      
        <div className="mt-12 grid grid-cols-2 gap-12">
          <button 
            className="p-6 rounded-xl border-4 border-qpSlate-200 shadow-qpDark/10 hover:bg-qpSlate-100">
            <svg className="mx-auto text-qpSky" width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.89 39.417c0 5.75-5.981 12.385-5.981 15.445h.129a1.717 1.717 0 0 1 0 3.433 1.717 1.717 0 0 1 0 3.432c0 1.044-.371 1.988-.983 2.732M42.451 39.417h26.35c-.271 0-.557.028-.841.086-.086.014-.17.028-.243.057a.723.723 0 0 0-.184.057 2.498 2.498 0 0 0-.642.258 1.41 1.41 0 0 0-.327.186 3.51 3.51 0 0 0-.584.443 4.557 4.557 0 0 0-.499.544 3.473 3.473 0 0 0-.811 1.673 5.018 5.018 0 0 0-.1.5c-.029.215-.042.429-.042.644V56.436M32.055 68.878v15.16h24.71a.68.68 0 0 1 .683.572.76.76 0 0 1-.213.686 4.29 4.29 0 0 0-1.253 3.032 4.276 4.276 0 0 0 4.273 4.29 4.276 4.276 0 0 0 4.273-4.29v-4.62M64.527 60.011H49.943c-1.254 0-1.894 1.515-1.011 2.431l15.595 16.133" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path clipRule="evenodd" d="M73.073 43.707v2.861c0 .786-.64 1.43-1.424 1.43h-7.122v-4.133c0-.215.015-.43.043-.643.029-.172.057-.344.1-.502a4.442 4.442 0 0 1 1.31-2.217c.186-.157.37-.313.585-.442.098-.072.213-.13.327-.187.198-.114.413-.2.64-.257a.741.741 0 0 1 .186-.058c.07-.028.155-.043.241-.056.285-.058.57-.086.84-.086 2.365 0 4.274 1.93 4.274 4.29ZM34.746 56.579c0 .944-.768 1.716-1.71 1.716h-8.544a1.71 1.71 0 0 1-1.71-1.716 1.71 1.71 0 0 1 1.71-1.717h8.545c.94 0 1.71.773 1.71 1.717ZM34.746 60.011c0 .944-.768 1.716-1.71 1.716h-8.544a1.71 1.71 0 0 1-1.71-1.716 1.71 1.71 0 0 1 1.71-1.716h8.545c.94 0 1.71.772 1.71 1.716Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path clipRule="evenodd" d="M33.037 61.727c0 1.045-.37 1.989-.982 2.731a4.227 4.227 0 0 1-3.29 1.56 4.276 4.276 0 0 1-4.274-4.29h8.546ZM60.255 92.618H27.939c-2.065 0-3.96-1.4-4.345-3.446a4.291 4.291 0 0 1 2.066-4.562 4.14 4.14 0 0 1 2.122-.573h28.983a.68.68 0 0 1 .683.573.76.76 0 0 1-.213.686 4.287 4.287 0 0 0-1.253 3.032 4.276 4.276 0 0 0 4.273 4.29ZM38.89 39.417c0 5.748-5.981 12.385-5.981 15.445h-3.418l2.564-7.722 1.24-3.733a1.982 1.982 0 0 0-.315-1.802c-.114-.171-.27-.33-.455-.443a1.934 1.934 0 0 0-2.45.244c-.797.8-2.08.8-2.877 0a1.935 1.935 0 0 0-2.45-.244 1.978 1.978 0 0 0-.769 2.245l3.803 11.455h-3.418c0-4.29-5.982-9.967-5.982-15.316 0-6.093 4.316-10.426 10.383-10.426 6.067 0 10.126 4.205 10.126 10.297Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path clipRule="evenodd" d="m33.294 43.407-1.24 3.733-2.564 7.722h-1.708L23.98 43.407a1.98 1.98 0 0 1 .768-2.246 1.937 1.937 0 0 1 2.45.244c.799.8 2.08.8 2.878 0a1.938 1.938 0 0 1 2.45-.244c.184.115.342.273.455.444.384.5.512 1.172.314 1.802Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M87.6 31.265v-1.287M90.32 32.396l.906-.91M91.445 35.127h1.283M90.32 37.857l.906.91M87.6 38.988v1.287M84.88 37.857l-.906.91M83.755 35.127h-1.283M84.88 32.396l-.906-.91M32.482 24.257v-6.864M29.063 20.825H35.9M12.4 35.984v-3.431M10.69 34.268h3.419M69.655 33.84v-3.433M67.945 32.123h3.418" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path clipRule="evenodd" d="M3.097 54.074a.826.826 0 0 0 .725 1.214h6.902a.826.826 0 0 0 .724-1.213l-3.45-6.499a.82.82 0 0 0-1.45 0l-3.451 6.498Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M53.522 34.284c-7.804-2.363-12.222-10.631-9.868-18.468C45.536 9.548 52.124 6 58.367 7.89c4.995 1.513 7.822 6.805 6.316 11.82-1.206 4.012-5.422 6.284-9.417 5.073-3.197-.968-5.006-4.354-4.042-7.564.772-2.568 3.47-4.022 6.027-3.247a3.887 3.887 0 0 1 2.587 4.841 3.093 3.093 0 0 1-3.857 2.078M82.498 60.87V59.3c0-.948.765-1.715 1.709-1.715h1.415c.945 0 1.71-.77 1.71-1.717v-1.422c0-.947.764-1.716 1.71-1.716h1.415c.943 0 1.71-.769 1.71-1.716v-1.422c0-.948.764-1.716 1.708-1.716h1.415c.945 0 1.71-.769 1.71-1.716v-1.422M42.31 49.714h16.235M38.89 54.862h19.655M37.182 65.16h7.69M37.182 70.308h12.817M37.182 75.457h18.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m70.51 77.56-.72.694a1 1 0 0 0 1.72-.695h-1Zm-5.983-6.194.72-.695h-.001l-.72.695Zm-6.836-7.064v-1a1 1 0 0 0-.719 1.695l.719-.695Zm12.819 0h1a1 1 0 0 0-1-1v1Zm-21.578-1.86-.72.694.001.001.72-.695Zm15.595 16.132.72-.694h-.001l-.72.694Zm5.826 6.036-.72.695h.001l.719-.695Zm1.979 2.044-.718.696.004.004.714-.7Zm-1.103-9.79-5.983-6.193-1.438 1.39 5.982 6.193 1.439-1.39Zm-5.983-6.193-6.836-7.065-1.438 1.39 6.836 7.066 1.438-1.391ZM57.69 65.3H70.51v-2H57.69v2Zm11.819-1V77.56h2V64.302h-2Zm3.848-5.29H49.943v2h23.415v-2Zm-23.415 0c-2.154 0-3.214 2.588-1.73 4.125l1.439-1.388a.43.43 0 0 1 .291-.737v-2Zm-1.73 4.126 15.595 16.132 1.438-1.39L49.65 61.747l-1.438 1.39Zm15.594 16.132 5.826 6.036 1.44-1.39-5.827-6.035-1.439 1.389Zm5.827 6.037 1.98 2.044 1.436-1.391-1.979-2.044-1.437 1.39Zm1.984 2.048c1.521 1.553 4.164.486 4.164-1.7h-2a.428.428 0 0 1-.736.3l-1.428 1.4Zm4.164-1.7V61.442h-2v24.212h2Zm0-24.212a2.432 2.432 0 0 0-2.424-2.431v2c.227 0 .424.192.424.43h2Z" fill="currentColor"/>
            </svg>
            <h2 className="text-xl mt-2 font-bold text-qpSky">
              Start from Scratch &rarr;
            </h2>
            <p className="mt-2 font-semibold text-qpSlate-500">Build your plan using our flexible Comp Plan Builder</p>
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="p-6 rounded-xl border-4 border-qpSlate-200 shadow-qpDark/10 hover:bg-qpSlate-100">
            <svg className="mx-auto text-qpWater" width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M51.759 37.93a23.874 23.874 0 0 0-5.81 1.853 23.962 23.962 0 0 0-5.053 3.099 26.525 26.525 0 0 0-4.5 4.641v.016a25.441 25.441 0 0 0-4.269 9.328 26.377 26.377 0 0 0-.57 4.018 25.884 25.884 0 0 0-.047 1.573c0 2.15.262 4.236.771 6.229a24.613 24.613 0 0 0 2.266 5.762" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m30.54 75.073-16.087 2.506c-1.681.265-3.253-.902-3.514-2.6L3.034 23.29c-.247-1.698.894-3.286 2.589-3.55l14.808-2.305c-.015.326 0 .653.046.996l.154 1.013-5.916.918.6 4.003h.015l.293 1.977 21.712-3.38-.308-1.992-.6-4.003-5.918.934-.154-.996a5.148 5.148 0 0 0-.246-.982l14.808-2.32c1.68-.265 3.251.904 3.513 2.601l2.743 17.878" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32.281 68.687a25.152 25.152 0 0 1-.77-6.229c0-.53.015-1.06.046-1.573.092-1.37.277-2.71.57-4.018a25.456 25.456 0 0 1 4.268-9.329v-.015a26.534 26.534 0 0 1 4.5-4.641 23.96 23.96 0 0 1 5.055-3.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m28.46 69.28-12.066 1.883L9.383 25.3l5.932-.935h.016l.292 1.979 21.713-3.38-.308-1.993 5.901-.92 2.419 15.76v.017" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m22.49 35.517.47 3.078-6.853 1.07-1.06-6.926 3.809-.594M25.826 31.844l13.706-2.14M26.414 35.692l9.138-1.426M34.361 43.91l-6.533 1.012M31.326 48.317l-2.913.452" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m17.685 34.69 1.758 1.302 3.102-5.212M24.37 47.83l.472 3.079-6.854 1.069-1.059-6.927 3.808-.594" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m19.567 47.004 1.759 1.301 3.1-5.212M26.253 60.143l.47 3.078-6.853 1.07-1.059-6.926 3.808-.595" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m21.449 59.316 1.757 1.302 3.102-5.211" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path clipRule="evenodd" d="m37.336 22.963-21.713 3.38-.293-1.978h-.014l-.602-4.003 5.918-.918-.155-1.012a5.476 5.476 0 0 1-.046-.998c.092-2.352 1.834-4.39 4.222-4.75 2.389-.373 4.654 1.028 5.456 3.24.108.311.2.638.245.98l.155.998 5.917-.935.602 4.002.308 1.994Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M56.906 53.44c-.246-.015-.493-.03-.74-.03-.693 0-1.356.077-2.002.234a8.88 8.88 0 0 0-5.503 3.892 8.987 8.987 0 0 0-1.447 4.922c0 1.339.292 2.616.831 3.769a8.886 8.886 0 0 0 6.272 5.077c.602.14 1.218.203 1.85.203 4.946 0 8.953-4.05 8.953-9.05 0-.249-.016-.498-.032-.747" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m60.99 54.827-3.22 3.254a4.542 4.542 0 0 0-1.604-.295c-.462 0-.924.078-1.34.202-1.91.577-3.282 2.352-3.282 4.47 0 2.586 2.065 4.672 4.622 4.672h.046c2.544-.031 4.577-2.102 4.577-4.672a4.65 4.65 0 0 0-.292-1.62l3.22-3.255M72.177 43.52l-3.822 3.862" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M69.018 41.2a24.335 24.335 0 0 0-12.852-3.66c-1.51 0-2.973.14-4.407.389a23.97 23.97 0 0 0-5.81 1.853 24.012 24.012 0 0 0-5.053 3.1 26.604 26.604 0 0 0-4.5 4.64v.017a25.457 25.457 0 0 0-4.269 9.328 26.413 26.413 0 0 0-.57 4.018 25.932 25.932 0 0 0-.047 1.573c0 2.149.262 4.236.771 6.23a24.632 24.632 0 0 0 2.266 5.762c4.19 7.709 12.297 12.926 21.62 12.926 13.621 0 24.655-11.15 24.655-24.918 0-4.75-1.325-9.205-3.621-12.989" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M73.24 53.472a19.388 19.388 0 0 1 2.189 8.986c0 10.745-8.63 19.467-19.263 19.467-6.564 0-12.358-3.317-15.841-8.379a19.688 19.688 0 0 1-2.666-5.7 19.448 19.448 0 0 1-.755-5.388c0-.826.046-1.635.154-2.43.17-1.417.494-2.772.955-4.08a19.473 19.473 0 0 1 8.8-10.512 18.976 18.976 0 0 1 5.763-2.103 18.134 18.134 0 0 1 3.59-.342c3.205 0 6.226.794 8.892 2.212M74.904 46.277l-3.821 3.862M67.8 53.456l-4.083 4.127" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M56.906 53.44c-.246-.015-.493-.03-.74-.03-.693 0-1.356.077-2.002.234a8.88 8.88 0 0 0-5.503 3.892 8.987 8.987 0 0 0-1.447 4.922c0 1.339.292 2.616.831 3.769a8.886 8.886 0 0 0 6.272 5.077c.602.14 1.218.203 1.85.203 4.946 0 8.953-4.05 8.953-9.05 0-.249-.016-.498-.032-.747M65.073 50.7l-4.084 4.127" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M69.758 56.992a14.68 14.68 0 0 1 1.047 5.466c0 8.175-6.548 14.795-14.639 14.795-4.145 0-7.89-1.745-10.556-4.533a14.58 14.58 0 0 1-3.328-5.59 14.646 14.646 0 0 1-.754-4.672c0-4.938 2.387-9.297 6.055-11.992a14.768 14.768 0 0 1 5.702-2.523 14.58 14.58 0 0 1 2.881-.28c1.91 0 3.73.374 5.41 1.06" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path clipRule="evenodd" d="M60.79 62.458c0 2.57-2.034 4.64-4.578 4.672h-.046c-2.557 0-4.623-2.087-4.623-4.672 0-2.117 1.372-3.893 3.282-4.47a4.509 4.509 0 0 1 2.943.093l-2.372 2.399c-.062.062-.124.124-.17.203a1.956 1.956 0 0 0-.4 1.183c0 .498.2.997.57 1.37.077.079.17.156.262.218.755.53 1.787.468 2.466-.217l2.373-2.4c.185.5.292 1.045.292 1.62Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path clipRule="evenodd" d="m93.026 27.962-1.079 1.09-8.72 8.815-8.323 8.41-3.82 3.862-3.283 3.317-4.084 4.127-5.593 5.654a1.908 1.908 0 0 1-2.466.218 1.96 1.96 0 0 1-.832-1.589c0-.42.139-.84.4-1.184.047-.078.108-.14.17-.202l5.594-5.653 4.083-4.127 3.282-3.318 3.822-3.862 8.321-8.41 8.722-8.814 1.08-1.09a1.56 1.56 0 0 1 2.203 0l.523.529a1.6 1.6 0 0 1 0 2.227Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path clipRule="evenodd" d="m89.22 26.296-8.722 8.815v-5.965c0-.42.17-.81.463-1.106l6.548-6.619c.463-.467 1.264-.186 1.31.483l.401 4.392ZM96.771 30.781l-6.55 6.62a1.53 1.53 0 0 1-1.093.466h-5.902l8.722-8.815 4.345.405c.663.048.94.857.478 1.324Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-xl mt-2 font-bold text-qpWater">
              View and Model Templates &rarr;
            </h2>
            <p className="mt-2 font-semibold text-qpSlate-500">Build your plan using our flexible Comp Plan Builder</p>
          </button>
        </div>
      </div>
    </div>
  )
}
