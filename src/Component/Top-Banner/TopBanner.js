import { TopBannerS, ShopNow,  LanguageDropdown } from "./TopBanner.style";

function TopBanner() {
  return (
    <TopBannerS>
      <div>
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
      <ShopNow href="#">ShopNow</ShopNow>
    </div>
    <LanguageDropdown>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
    </LanguageDropdown>
    
    </TopBannerS>
  );
}

export default TopBanner;
