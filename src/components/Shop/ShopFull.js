import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaVk, FaInstagram } from "react-icons/fa";
import { MdPhoneForwarded } from "react-icons/md";
import uniqueId from "lodash/uniqueId";

import { capitalizeFirstLetter } from "./ShopInList";

const shop = ({ number,
  title = 'shop',
  description = 'shop in gorkogo55',
  phone = '777-777',
  vk = 'vk.ru',
  instagram = 'instagramm.com',
  website = 'www.gorkogo.55',
  route = 'gorkogo55',
  hashTageSearch = 'gorkogo55',
  keywords, ...props } = {}) => {

  keywords = keywords.split(", ");
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <p>Павильон № {number}</p>
          <p>{capitalizeFirstLetter(title)}</p>
        </Card.Title>
        {description && description !== "-" ? (
          <Card.Text>{description}</Card.Text>
        ) : null}
        {keywords && keywords !== "-" ? (
          <Card.Text>
            {keywords.map(kw => {
              return (
                <Button
                  variant="link"
                  onClick={() => hashTageSearch(kw)}
                  key={uniqueId()}
                >
                  #{kw}{" "}
                </Button>
              );
            })}
          </Card.Text>
        ) : null}
        {phone && phone !== "-" ? (
          <>
            <p>Телефон: {phone}</p>
            <Card.Text>
              <Button href={`tel:${phone}`} variant="success">
                <MdPhoneForwarded /> Позвонить
              </Button>
            </Card.Text>
          </>
        ) : null}
        {vk && vk !== "-" ? (
          <Card.Text>
            <Button href={vk} variant="link">
              <FaVk /> Вконтакте
            </Button>
          </Card.Text>
        ) : null}
        {instagram && instagram !== "-" ? (
          <Card.Text>
            <Button variant="link" href={instagram}>
              <FaInstagram /> Instagram
            </Button>
          </Card.Text>
        ) : null}
        {website && website !== "-" ? (
          <Card.Text>
            <Button href={website} variant="link">
              Cайт
            </Button>
          </Card.Text>
        ) : null}
        {route && route !== "-" ? (
          <Card.Text>Как пройти: {route}</Card.Text>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default shop;
