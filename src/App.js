import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import './Styles/header.css'
import './Styles/content.css'
import './Styles/article.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const App = () => {
  const [photos, setPhotos] = useState([])
  const openPhoto = (url) => window.open(url)

  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': 'Client-ID rXPkNgsB29-uynn0vY_HuzFyCETLXKVj42CELIlyQBs'
              }
            })
            const data = await response.json()
            setPhotos(data.results)
          }}
        >
          <Form>
            <div className='form-content'>
              <Field name='search' placeholder='Buscar' />
              <button className='submit-button'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Form>
        </Formik>
      </header>
      <div className='container'>
        <div className='center'>
          {photos.map(photo =>
            <article key={photo.id} onClick={() => openPhoto(photo.links.html)}>
              <img src={photo.urls.regular} />
              <p> {[photo.description, photo.alt_description].join('-')} </p>
            </article>
          )}
        </div>
      </div>
    </div >
  )
}

export default App;
