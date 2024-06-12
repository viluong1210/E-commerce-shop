const getProuctsData = () => {
  const products : any = []

  for (let index = 0; index < 20; index++) {
    products.push({
      id: index + 1,
      imageSrc1:
        'https://vdelta.com.vn/wp-content/uploads/2023/08/Chua-co-ten-1000-%C3%97-1000-px-33-3-350x435.png',
      alt: 'mvm',
      imageSrc2:
        'https://vdelta.com.vn/wp-content/uploads/2023/06/UTB8Qw1mnf2JXKJkSanrq6y3lVXaa.jpg_960x960-1-350x435.webp',
      name1: 'SUGARCANE MOLASSES',
      name2: 'read more',
      price: '1 $',
    })
  }
  return products
}

const mockImages = [
  'https://vdelta.com.vn/wp-content/uploads/2022/12/a45952ce4e789726ce69.jpg',
  'https://vdelta.com.vn/wp-content/uploads/2022/12/a45952ce4e789726ce69.jpg',
  'https://vdelta.com.vn/wp-content/uploads/2022/12/a45952ce4e789726ce69.jpg',
  'https://vdelta.com.vn/wp-content/uploads/2022/12/a45952ce4e789726ce69.jpg',
  'https://vdelta.com.vn/wp-content/uploads/2022/12/a45952ce4e789726ce69.jpg',
]

export { getProuctsData, mockImages }
