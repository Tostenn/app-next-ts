import { foods} from "../data/data"
import Poste from '@/app/components/post';

export default function Post(){
    // foods
    return (<>
        <p className="font-bold text-2xl text-center my-3 capitalize">mes posts</p>
        <div className="space-y-3">
            {
                foods.map(element => <Poste key={element.name} post={element} />)
            }
        </div>
    </>)
}