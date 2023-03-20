# Overflowing river of Seience

## 개요

[프로젝트 바로가기](http://overflowingscience.site/)


### 소개

chatGPT 인공지능으로 손쉽게 블로그 글을 제작할 수 있음을 알고, 이를 Zapier를 통해 자동화하여 짧은 기간에 많은 블로그 글을 제작하는 것이 시작이였습니다.

블로그 제작의 최종 목적은 chatGPT를 통해 제작한 블로그가 얼마나 많은 사용자를 유입시키는 것을 확인하고, 트래픽을 높여 광고수익을 얻도록 하는 것입니다.

그렇기 때문에 블로그 글은 영어로 제작하고, 사용자와 친숙한 주제를 선정했습니다.
또한, 자동화하기 위한 툴로 Zapier를 선택하고, 데이터를 저장하기 위한 데이터베이스 툴은 Airtable을 선택했습니다.

<br />


### 사용한 기술

* Zapier
* Airtable
* AWS S3
* Gabia

---

<br />

## 리뷰

해당 프로젝트를 제작하는 데에 있어 순차적으로 설명드립니다.

### **1. 블로그 주제 및 제목 선정**

![](https://velog.velcdn.com/images/poiu0329/post/54613f58-617d-4aa4-a246-11d99be97681/image.png)

위와 같이 블로그 주제 및 제목 또한 chatGPT의 힘을 빌려 선정했습니다.

<br />

### **2. 선정한 주제에 맞춰 제목과 카테고리 선정**

![](https://velog.velcdn.com/images/poiu0329/post/906f9861-27f9-422f-8ec0-d087bfb4c393/image.png)

위와 같이 선정한 블로그 주제에 맞춰 100개의 블로그 제목, 카테고리를 선정했습니다.
이를 airtable에 저장하기 위해 .csv파일로 저장했습니다.

<br />

### **3. airtable에 저장**

![](https://velog.velcdn.com/images/poiu0329/post/7e286b92-bd3c-4dc8-852f-09d53566d9b9/image.png)

.csv로 변환한 블로그의 글과 카테고리를 airtable에 저장했습니다.
이는 곧 Zapier의 자동화에도 쓰일 예정이고, 웹사이트의 호출 api로도 쓰일 예정입니다.

<br />

### **4. Zapier에서 OpenAI Prompt 발송**
![](https://velog.velcdn.com/images/poiu0329/post/fbcd3380-ffb1-4dc9-ab6f-0a17200ad5c3/image.png)

이제 airtable에 저장된 블로그 제목과 카테고리에 맞춰 Zapier에서 블로그 글을 자동화 할 수 있습니다.
OpenAI는 Zapier에 지원되는 앱으로서 Prompt를 전송해서 chatGPT에 질문을 자동화하여 글을 제작할 수 있습니다.

<br />

### **5. 이미지 제작**

![](https://velog.velcdn.com/images/poiu0329/post/1e1421a6-364a-4954-85f5-49644f73aecf/image.png)

블로그 글에 포스트 할 수 있도록 저작권 없는 무료 이미지를 사용했어야 했고, 다음과 같이 이미지를 제작하는 Prompt를 제작했습니다.

<br />

### **6. airtable 업데이트**

![](https://velog.velcdn.com/images/poiu0329/post/35b2a0da-98bc-472b-9381-7b9b01aafb40/image.gif)

OpenAI를 통해 각각 글, 이미지 등등 제작했다면 airtable에 업데이트를 함으로써 저장했습니다.

<br />

### **7. Gabia 도메인 구매**

웹사이트 배포를 위해 Gabia에서 다음 도메인을 구매했습니다.

http://overflowingscience.site

<br />

### **8. AWS S3를 이용한 정적 배포**

AWS S3를 이용해서 정적 배포를 실시했습니다.

<br />

### **9. SEO 최적화**


`meta` 태그를 적절히 이용하고 시맨틱마크업 준수하도록 노력했습니다.

```
// robots.txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
```

```html
<meta property="og:title" content="Overflowing river of Seience" />
<meta property="og:description" content="related to science in everyday life" />
```

![](https://velog.velcdn.com/images/poiu0329/post/0b91a6c7-b15d-4a7b-b4ce-69301e08dc39/image.png)

[SEO에 관련해서 블로그에 정리했습니다.(클릭)](https://velog.io/@poiu0329/HTML-SEO-%EA%B2%80%EC%83%89-%EC%97%94%EC%A7%84-%EC%B5%9C%EC%A0%81%ED%99%94SEO%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C)

<br />

### **10. 반응형 지원**
![](https://velog.velcdn.com/images/poiu0329/post/dc4936e3-4911-4b13-851a-21c967a31951/image.gif)

모바일에서도 이용자가 UI에 불편하지 않도록 구현했습니다.

다음 링크를 통해 웹 사이트가 모바일 친화적인지를 테스트 해 볼 수가 있습니다.
https://search.google.com/test/mobile-friendly?hl=ko

![](https://velog.velcdn.com/images/poiu0329/post/77773547-ad3e-4f14-a055-43eea759e192/image.png)

<br />

### **11. Google GA 연결**

![](https://velog.velcdn.com/images/poiu0329/post/760108ae-6bd9-43eb-a36b-255844e15db1/image.png)

사용자의 유입 경로와 데이터를 파악하기 위해 Google GA를 연결했습니다.

```html
<script async src=""></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '');
</script>
```

---

## 코드 리뷰

### **1. 페이지네이션 구현**

약 100개의 블로그 글을 `/post` 페이지에서 불러오고 10개씩 볼 수 있도록 페이지네이션을 구현했습니다.

```javascript
// src/view/Post.js
import { useState, useEffect } from 'react';

import { Pagination } from '../components/Pagination';

export const Post = () => {
    const [postList, setPostList] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
      (async () => {
        const { data } = await getPostList(`${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE_ID}`)
  
        setPostList(data || []);
      })()
    }, []);
  
    return (
        (postList.records &&       
            <div className={styles.container}>
                <div className={styles.inner}>
                {postList.records && postList.records.slice(offset, offset + limit).map((value, index) => (
                    <PostItem key={index} data={value} />
                ))}
                <div className={styles.page}>
                    <Pagination 
                        total={postList.records.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </div>
              </div>
          </div>)
    );
}
```

```javascript
// src/components/Pagination.js
export const Pagination = ({ total, limit, page, setPage }) => {
    const numPages = Math.ceil(total / limit);

    return (
        <div className={styles.container}>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                &lt;
            </button>
            {Array(numPages)
                .fill()
                .map((_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        className={page === i + 1 ? styles.current : undefined}
                    >
                        {i + 1}
                    </button>
                ))
            }
            <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
                &gt;
            </button>
        </div>
    )
}
```

<br />

### **2. Scroll 추적**

Nav 바에 적힌 글귀의 색상을 변경하기 위해 Scroll을 추적했고, Scroll에 따라 색상을 바꾸어 UI을 높였습니다.
```javascript
// src/components/Header.js
import { useState, useEffect } from 'react';

export const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    }, []);

    return (
        <header className={styles.header}>
            <nav className={`${styles['nav-bar']}`}>
                <div className={styles.inner}>
                    <div className={scrollPosition < 600 ? undefined : styles.change}>
                        <Link to={'/'}>Overflowing river of Science</Link>
                    </div>
                    <div>
                        <ul className={scrollPosition < 600 ? undefined : styles.change}>
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><Link to={'/post'}>POST</Link></li>
                            <li><Link to={'/about'}>ABOUT</Link></li>
                            <li>{<FontAwesomeIcon 
                                icon={faBars} 
                                onClick={() => setShow(!show)} 
                                className={styles.icon} />}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
```
![](https://velog.velcdn.com/images/poiu0329/post/309afdfc-586b-4450-97a4-46dfcadb7d31/image.gif)

### **3. fontawesome Hamburger icon**

모바일 화면에서 Nav바에 있는 메뉴를 햄버거 아이콘으로 숨기고, 나타나는 기능은 모달이 나타나는 기능과 동일하게 진행했습니다.

```javascript
// src/HeaderBar.js
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderBar.module.css';

export const HeaderBar = ({ show, setShow }) => {
    return (
        <div className={show ? `${styles.modal} ${styles.open}` : styles.modal}>
            <article className={styles.bar}>
                <nav>
                    <ul>
                        <div>
                            <FontAwesomeIcon icon={faX} onClick={() => setShow(!show)} className={styles.Xicon} />
                        </div>
                        <li><Link to={'/'} onClick={() => setShow(!show)}>HOME</Link></li>
                        <li><Link to={'/post'} onClick={() => setShow(!show)}>POST</Link></li>
                        <li><Link to={'/about'} onClick={() => setShow(!show)}>ABOUT</Link></li>
                    </ul>
                </nav>
            </article>
        </div>
    )
}
```

```javascript
// src/components/Header.js
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import { HeaderBar } from './HeaderBar';

export const Header = () => {
    const [show, setShow] = useState(false);

    return (
      <HeaderBar show={show} setShow={setShow}/>
    )
}
```

![](https://velog.velcdn.com/images/poiu0329/post/40c579a6-bdcf-43d7-9d1e-bdf4501a0e13/image.gif)

<br />

## 마무리

단순히 코드를 구현하는 것을 넘어서 Google Ga 연결 등 하나의 서비스를 만들었기 때문에 뜻깊었고 생각보다 훨씬 더 신경써야 할 것이 많았던 것 같습니다.

문제 해결을 함에 있어서 코딩만이 정답은 아니였고, 더 나은 방향을 위해 선택하는 것도 중요하다는 것을 배웠습니다.
결국 현업에서는 협업이 그만큼 중요하겠지요.

위에 적진 않았지만, Google AdSense 결과에 거부되었지만 추후에 계속 손보면서 나아갈 예정입니다.

감사합니다.

무언가 궁금하시거나 이슈가 있다면 아래 이메일로 언제든지 문의주시면 감사하겠습니다.

poiu03290@gmail.com