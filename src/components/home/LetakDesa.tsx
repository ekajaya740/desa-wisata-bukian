const LetakDesa = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify- text-justify container mx-auto'>
        <div className='space-y-2 basis-1/2'>
          <h1
            className='
            text-3xl
            font-bold
          '>
            Letak Desa
          </h1>
          <ul className='space-y-1 pl-5 list-disc '>
            <li>
              <div className='flex space-x-2'>
                <p>Negara</p>
                <p>:</p>
                <p>Indonesia 🇮🇩</p>
              </div>
            </li>
            <li>
              <div className='flex space-x-2'>
                <p>Provinsi</p>
                <p>:</p>
                <p>Bali</p>
              </div>
            </li>
            <li>
              <div className='flex space-x-2'>
                <p>Kabupaten</p>
                <p>:</p>
                <p>Gianyar</p>
              </div>
            </li>
            <li>
              <div className='flex space-x-2'>
                <p>Kecamatan</p>
                <p>:</p>
                <p>Payangan</p>
              </div>
            </li>
            <li>
              <div className='flex space-x-2'>
                <p>Kode Pos</p>
                <p>:</p>
                <p>80572</p>
              </div>
            </li>
            <li>
              <div className='flex space-x-2'>
                <p>Luas Wilayah</p>
                <p>:</p>
                <p>
                  8,39 km<sup>2</sup>
                </p>
              </div>
            </li>
            <li>
              <div className='flex space-x-2'>
                <p>Kode Wilayah</p>
                <p>:</p>
                <p>51.04.07.2003</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='basis-1/2 space-y-2'>
          <h1
            className='text-3xl
            font-bold'>
            Batas dengan Desa Lain
          </h1>
          <div className='space-y-1'>
            <p>
              Desa Bukian terletak membujur dari selatan ke utara dengan
              batas-batas wilayah sebagai berikut :
            </p>
            <ol className='pl-5 list-decimal prose prose-sm'>
              <li>
                <div className='flex space-x-2'>
                  <p>Sebelah utara</p>
                  <p>:</p>
                  <p>Desa Pahu</p>
                </div>
              </li>
              <li>
                <div className='flex space-x-2'>
                  <p>Sebelah selatan</p>
                  <p>:</p>
                  <p>Desa Melinggih</p>
                </div>
              </li>
              <li>
                <div className='flex space-x-2'>
                  <p>Sebelah barat</p>
                  <p>:</p>
                  <p>Desa Melinggih/Desa Pahu</p>
                </div>
              </li>
              <li>
                <div className='flex space-x-2'>
                  <p>Sebelah timur</p>
                  <p>:</p>
                  <p>Desa Taro/Desa Klusa</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetakDesa;
