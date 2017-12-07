// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import likeRecipe from '../actions/recipes/like'
import LikeButton from '../components/LikeButton'
import RecipeCategory from './RecipeCategory'
import Title from '../components/Title'
import './RecipeItem.css'
import { Link } from 'react-router-dom'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  toggleLike = () => {
    console.log('TOGGLE LIKE')
    this.props.toggleLike(this.props._id)
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, photo, liked } = this.props
    const categories = { vegan, vegetarian, pescatarian }

    return(
      <article className="RecipeItem">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />
          <Title content={title} className="level-2" />
          <ul className="categories">
            <RecipeCategory { ...categories } />
          </ul>
        </header>

        <div>
          <p>{ summary }</p>
        </div>
        <footer>
          <LikeButton onChange={this.toggleLike} liked={liked} />
          <Link to={"/recipes/"+this.props._id}>Click here</Link>
        </footer>
      </article>
    )
  }
}

const mapDispatchToProps = { toggleLike: likeRecipe }

export default connect(null, mapDispatchToProps)(RecipeItem)
