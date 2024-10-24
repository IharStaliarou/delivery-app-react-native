import './links.scss';

const linksData = [
    { href: '#', label: 'Coffee house', id: 1 },
    { href: '#', label: 'Our coffee', id: 2 },
    { href: '#', label: 'Four your pleasure', id: 3 },

];

const Links = () => {
    const links = linksData.map(link => {

        return (
            <li key={link.id} className='links__list-item'>
                <a href={link.href}>
                    {link.label}
                </a>
            </li>
        )
    })

    return (
        <ul className='links__list'>
            {links}
        </ul>
    )
}

export default Links;