import { Button } from "@material-tailwind/react";
const products = [
    {
      id: 1,
      name: 'Spectre',
      href: '#',
      price: '$48',
      imageSrc: 'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/spectre-ii/components/D-Grille-IMG.png/jcr:content/renditions/cq5dam.web.1920.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Phantom',
      href: '#',
      price: '$35',
      imageSrc: 'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-series-ii-discover/page-components/Phantom-II-Discover-Full-Shot-1-R.jpg/jcr:content/renditions/original',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Collin',
      href: '#',
      price: '$89',
      imageSrc: 'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/cullinan_s2/cs2_discover/page-components/D-EXP-IMG-CSII-DISCOVER.jpg/jcr:content/renditions/cq5dam.web.1920.webp',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Ghost',
      href: '#',
      price: '$35',
      imageSrc: 'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/ghost-s2/web-10/web-10-ghost-discover/components/D-COLLAGE-01-GHOST.png/jcr:content/renditions/cq5dam.web.1920.webp',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Products() {
    return (
      <div className="bg-white text-center p-5">
        <br /><br />
        <h1 className="text-4xl font-bold tracking-tight text-red-500 sm:text-6xl">
            Prouduct
            </h1>

        <div className="mx-auto max-w-2xl   sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-red-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-red-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-red-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-2xl  lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-red-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-red-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-red-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div><br /><br />
        <div className="flex gap-6 items-center justify-center">
     <Button ripple={true} className="bg-red-900">Show More</Button>
        </div><br /><br />
      </div>
    )
  }
  