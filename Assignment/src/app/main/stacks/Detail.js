import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import AxiosInstance from '../../helpers/AsiosInstance';
import { AppContext } from '../../main/AppContext';
const Detail = (props) => {
  const _id = props?.route?.params?._id;
  const { navigation } = props;
  const { cart, setCart, favoriteProducts, setFavoriteProducts } = useContext(AppContext);
  const [product, setproducts] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await AxiosInstance()
          .get(`/products/${_id}`);
        // console.log('Lấy sản phẩm thành công: ', response);
        setproducts(response.product);
        // console.log(product);
      }
      catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [_id]);
  const toggleLike = () => {
    setIsLiked(!isLiked);
    addFavorite();
  }
  const addToCart = () => {
    const oneCartItem =
    {
      product_id: product._id,
      'product_name': product.name,
      "product_image": product.image,
      "product_quantity": 1,
      "product_price": product.price,
    }
    // kiểm tra sản phẩm đã có trong giỏ hàng chưa
    const index = cart.findIndex(item => item.product_id.toString() == product._id.toString());
    if (index == -1) {
      // nếu chưa có thì thêm vào
      // spread operator
      setCart([...cart, oneCartItem]);
    } else {
      // nếu có rồi thì tăng số lượng lên 1
      const newCart = [...cart];
      newCart[index].product_quantity++;
      setCart(newCart);
    }
  }
  const addFavorite = () => {
    const oneCartItem2 =
    {
      product_id: product._id,
      'product_name': product.name,
      "product_image": product.image,
      "product_price": product.price,
    }
    // kiểm tra sản phẩm đã có trong giỏ hàng chưa
    const index = favoriteProducts.findIndex(item => item.product_id.toString() == product._id.toString());
    if (index == -1) {
      setFavoriteProducts([...favoriteProducts, oneCartItem2]);
    } else {
      console.log("đã có");
    }

    // const newfavoriteProducts = [...favoriteProducts];
    // setFavoriteProducts(newfavoriteProducts);

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.ImageHeader}
          source={require('./../../../assets/nendetail.png')}
        />
        <Image
          style={styles.nenHeader}
          source={require('./../../../assets/Rectangle.png')} />
        <Text style={styles.textHeader}>
          {product.name}
        </Text>

        <View style={styles.containerRating}>
          <Image
            source={require('./../../../assets/star.png')}
          />
          <Text style={styles.textRating}>
            {product.rating}
          </Text>
          <Text style={styles.voting}>
            ({product.voting})
          </Text>
        </View>
        <Image style={styles.loai}
          source={require('./../../../assets/loai.png')} />
        <Image style={styles.milk}
          source={require('./../../../assets/milk.png')} />
        <Image style={styles.tag}
          source={require('./../../../assets/tag.png')} />
        {/* <TouchableOpacity onPress={addFavorite} style={styles.like}>
          <Image style={styles.likeImage}
            source={require('./../../../assets/unlike.png')} />
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={addFavorite} style={styles.like} >
          <Image
            style={styles.likeImage}
            source={require('./../../../assets/like.png')}
          />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={toggleLike} style={styles.like}>
          <Image style={styles.likeImage} source={isLiked ? require('./../../../assets/like.png') : require('./../../../assets/unlike.png')} />
        </TouchableOpacity>
      </View>


      <View style={styles.footer}>
        <Text style={styles.mota}>
          Description
        </Text>
        <Text style={styles.description}>
          {product.description}
        </Text>

        <View style={styles.containerPrice}>
          <Text style={styles.Textprice}>
            Price
          </Text>
          <Text style={styles.price}>
            ${product.price}
          </Text>
          <TouchableOpacity style={styles.button} onPress={addToCart}>
            <Text style={styles.addtocart}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Detail
const styles = StyleSheet.create({
  likeImage: {
    width: '100%',
    height: '100%',
  },
  like: {
    position: 'absolute',
    marginTop: 40,
    marginLeft: 350,
    width: 40,
    height: 40,
  },
  containerPrice: {
    marginTop: 90,

  },
  addtocart: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',

  },
  button: {
    padding: 20,
    position: 'absolute',
    width: 240,
    height: 60,
    backgroundColor: '#D17842',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    top: 20,
  },
  price: {
    color: '#fff',
    lineHeight: 28,
    fontSize: 26,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 25,
  },
  Textprice: {
    color: '#AEAEAE',
    marginLeft: 25,
    fontSize: 17,
    marginTop: 10,
  },
  description: {
    color: '#fff',
    padding: 10,
    lineHeight: 20,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 12,
  },
  mota: {
    color: '#AEAEAE',
    marginLeft: 22,
    lineHeight: 20,
    fontSize: 17,
    marginTop: 10,

  },
  tag: {
    position: 'absolute',
    marginTop: 460,
    marginLeft: 275,
  },
  milk: {
    position: 'absolute',
    marginTop: 390,
    marginLeft: 342,
  },
  loai: {
    position: 'absolute',
    marginTop: 390,
    marginLeft: 272,
  },
  voting: {
    color: '#AEAEAE',
    marginLeft: 8,
    lineHeight: 20,
    fontSize: 12,

  },
  textRating: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,

  },
  containerRating: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 450,
    marginLeft: 22,
  },
  container: {
    flex: 1,
    backgroundColor: '#21262E',
  },
  header: {
    flex: 6
  },
  ImageHeader: {
    width: '100%',

  },
  footer: {
    backgroundColor: '#141921',
    flex: 4
  },
  nenHeader: {
    position: 'absolute',
    bottom: 0,
    width: '100%'

  }
  , infoContainer: {

  },
  textHeader: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 36,
    position: 'absolute',
    marginTop: 390,
    marginLeft: 22,

  }

})