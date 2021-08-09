import React, { useState, useEffect } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { axiosConfig, baseUrl } from "../../Constants/urls";
import { useHistory, useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import axios from "axios";
import {
  ButtonBack,
  Title,
  HeaderContainer,
  ContainerInformation,
  useStyles,
} from "./Styled";
import { goToLastPage } from "../../Router/coordinator";
import back from "../../Imgs/back.png";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

function CardRestaurant() {
  useProtectedPage();
  const classes = useStyles();
  const history = useHistory();
  const pathParams = useParams();
  const restaurantId = pathParams.restaurantId;
  const [data, setData] = useState({});
  const { shipping, name, logoUrl, category, address, deliveryTime } =
    data || {};
  const [product, setProduct] = useState([]);
  const [productsCategories, setProductsCategories] = useState([]);

  useEffect(() => [productsCategories]);

  
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const getCategories = () => {
    let categories =
      product &&
      product

        .map((product) => {
          return product.category;
        })
        .filter(onlyUnique);

    setProductsCategories(categories);
  };

  const timeDelivery = deliveryTime + 15;

  const voltar = () => {
    history.goBack();
  };

  return (
    <div>
      <HeaderContainer>
        <ButtonBack onClick={() => goToLastPage(history)}>
          {" "}
          <img src={back} alt="back" />{" "}
        </ButtonBack>
        <Title restaurant>RESTAURANTE</Title>
        <p></p>
      </HeaderContainer>
      {name ? (
        <>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={logoUrl}
                title={name}
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  color="primary"
                  variant="p"
                  component="p"
                >
                  {name}{" "}
                </Typography>

                <Typography className={classes.information} component="p">
                  {category}
                </Typography>
                <ContainerInformation frete>
                  <Typography className={classes.information} component="p">
                    {deliveryTime} - {timeDelivery} min
                  </Typography>
                  <Typography className={classes.information} component="p">
                    Frete R${shipping},00
                  </Typography>
                </ContainerInformation>
                <Typography className={classes.address} component="p">
                  {address}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {productsCategories.map((category) => {
            return (
              <>
                <Typography className={classes.categoryTitle} component="p">
                  {" "}
                  {category}{" "}
                </Typography>
                {product.map((product) => {
                  if (product.category === category) {
                    return (
                      <ProductsCard
                        key={product.id}
                        product={product}
                        restaurant={data}
                      />
                    );
                  }
                })}
              </>
            );
          })}
        </>
      ) : (
        <p>Testando</p>
      )}
    </div>
  );
}

export default CardRestaurant;
