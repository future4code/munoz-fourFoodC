import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router";
import { useForm } from "../../Hooks/useForm";
import { initialForm } from "../../Constants/inputs";
import { Icon, ButtonBack, InputSearch, ContainerSearch, HeaderContainer, Title, ContainerFilter } from './Styled'
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import back from '../../Imgs/back.png'
import { restauran } from '@material-ui/icons';
import { axiosConfig, baseUrl } from '../../Constants/urls';
import axios from 'axios'

function Search() {
    const [form, onChange, resetForm] = useForm(initialForm)
    let { states } = useContext(GlobalStateContext)
    const restaurants = states.restaurants
    const [searchOpen, setSearchOpen] = useState(false)
    const [products, setProducts] = useState([])
    const [productsName, setProductsName] = useState([])
    const [filter, setFilter] = useState()

    useEffect(() => {
        inicialStateFilter()
   
    }, [restaurants])

    const inicialStateFilter = () => {
        if (form.inputSearch === '') {
            setFilter(states && states.restaurants)
        }
    }

    const onClickCategory = (value) => {
        form.category = value
        filterName()
        setSearchOpen(true)
    }

    const onClickBack = () => {
        onClickCategory('')
        setSearchOpen(false)
    }

    const categoryOptions = restaurants && restaurants.map((restaurants) => {
        return (
            <button key={restaurants.id} onClick={() => onClickCategory(restaurants.category)}>{restaurants.category}</button>
        )
    })

    const sendForm = (e) => {
        e.preventDefault()
        filterName()
    
        resetForm()
        setSearchOpen(true)
    }

    const filterName = () => {

        const filtered = restaurants

            .filter((restaurants) => {
                if (form.inputSearch) {
                    return (form.inputSearch && restaurants.name.toLowerCase().includes(form.inputSearch.toLowerCase()))
                } else {
                    return restaurants
                }
            })

            .filter((restaurants) => {
                if (form.category) {
                    return (form.category && restaurants.category.includes(form.category))
                } else {
                    return restaurants
                }
            })

        return (
            setFilter(filtered)
        )
    }
    
    console.log(filter)

    const Header = () => {

        if (searchOpen) {
            return (
                <HeaderContainer back>
                    <ButtonBack onClick={() => onClickBack()}> <img src={back} alt='back' /> </ButtonBack>
                    <Title>Busca</Title>
                    <p></p>
                </HeaderContainer>
            )
        } else {
            return (
                <>
                    <HeaderContainer>
                        <Title>IFUTURE</Title>
                    </HeaderContainer>
                    <div>
                        <form onSubmit={sendForm}>
                            <Icon src='https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2B6D2876-FB2A-4EF4-8B8D-5314BF50995F.svg' alt="search" />

                            <InputSearch
                                type={"text"}
                                name={"inputSearch"}
                                value={form.inputSearch}
                                placeholder={"Restaurante"}
                                onChange={onChange}
                            >
                            </InputSearch>

                        </form>
                    </div>
                    <ContainerFilter>
                        {categoryOptions}
                    </ContainerFilter>
                </>
            )
        }

    }

    return (
        <div>
            {Header()}
        </div >
    )
}

export default Search
