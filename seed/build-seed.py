"""Generates seed/content.ndjson — the starter content taken from the Monograph mockups.
Import with:  npx sanity dataset import seed/content.ndjson production --replace"""
import json, itertools, os

_k = itertools.count(1)
def key(): return f"k{next(_k):04d}"
def keyed(items): return [{"_key": key(), **i} for i in items]

def block(*spans):
    """spans: str or (text, href) or (text, 'em')"""
    children, defs = [], []
    for s in spans:
        if isinstance(s, str):
            children.append({"_type": "span", "_key": key(), "text": s, "marks": []})
        elif s[1] == "em":
            children.append({"_type": "span", "_key": key(), "text": s[0], "marks": ["em"]})
        else:
            k = key()
            defs.append({"_type": "link", "_key": k, "href": s[1]})
            children.append({"_type": "span", "_key": key(), "text": s[0], "marks": [k]})
    return {"_type": "block", "_key": key(), "style": "normal", "markDefs": defs, "children": children}

def ref(i): return {"_type": "reference", "_ref": i, "_key": key()}
def link(label, href): return {"_type": "link", "label": label, "href": href}
def entry(title, org=None, years=None, note=None):
    e = {"_type": "cvEntry", "title": title}
    if org: e["organization"] = org
    if years: e["years"] = years
    if note: e["note"] = note
    return e

docs = []

# ---------- Work items ----------
work = [
    dict(_id="work-aipp", title="AI Pedagogy Project",
         summary="An open resource helping educators engage critically and creatively with AI in the classroom.",
         description="An open resource from metaLAB (at) Harvard that helps educators engage critically and creatively with AI in the classroom. It brings together classroom assignments contributed by educators with introductory guides to AI tools, all openly licensed so anyone can use and adapt them.",
         role="Lead engineer", organization="Harvard University", years="2023–present",
         link=link("aipedagogy.org", "https://aipedagogy.org")),
    dict(_id="work-flip", title="Failure: Learning in Progress",
         summary="An open resource teaching educators to help students embrace, learn, and bounce back from failure.",
         description="An open resource from the University of Toronto that helps students embrace, learn from, and bounce back from failure. It treats failure as a normal part of learning, with materials for students and the instructors who support them.",
         role="Research assistant", organization="University of Toronto", years="2022–2024",
         link=link("learningfromfailure.ca", "https://learningfromfailure.ca")),
    dict(_id="work-reflect", title="REFLECT",
         summary="A visualization tool that helps educators reflect on their teaching and learning practice.",
         description="A visualization tool, developed with the Society for Teaching & Learning in Higher Education, that helps instructors see patterns in their teaching and learning practice and reflect on how to improve it.",
         role="Research engineer", organization="Society for Teaching & Learning in Higher Education", years="2024",
         link=link("reflectiveteaching.ca", "https://reflectiveteaching.ca")),
    dict(_id="work-beyond-disinfo", title="Beyond Disinformation",
         summary="Identity narratives, authoritarian practices, and the strategies of digital disinformation.",
         description="A research collaboration between the Universities of Toronto and Manchester on the digital disinformation capabilities and strategies of authoritarian states. Its 2025 policy report examines how identity narratives, lawfare, and marketcraft work together in authoritarian information practices.",
         role="Co-author", kind="Policy report", organization="Universities of Toronto & Manchester", years="2025",
         link=link("Read the report", "#")),
    dict(_id="work-us-surveillance", title="The United States of Surveillance",
         summary="A review of America’s mass surveillance laws and programs, and of the oversight meant to keep them in check.",
         description="A review of America’s mass surveillance laws and programs, and of the oversight meant to keep them in check.",
         kind="Peer-reviewed publication", organization="IDEAH 3(2)", years="2022",
         link=link("Read the article", "#")),
    dict(_id="work-sage-ai", title="Introduction to Artificial Intelligence",
         description="A self-paced online course on Sage Campus introducing [audience] to the fundamentals of artificial intelligence.",
         role="Course author", organization="Sage Publishing", years="2025",
         link=link("View course", "#")),
    dict(_id="work-ocean-ai", title="AI Design for Ocean Solutions",
         description="A short online course during Harvard’s January term on designing AI for ocean solutions. [What participants worked on.]",
         role="Co-instructor", organization="Harvard University, J-term", years="2026",
         link=link("Course page", "#")),
]
for w in work:
    docs.append({"_type": "workItem", **w})

# ---------- Settings ----------
profiles = keyed([
    {"_type": "socialLink", "label": "ORCID", "handle": "0009-0000-1683-5211", "url": "https://orcid.org/0009-0000-1683-5211", "inFooter": True},
    {"_type": "socialLink", "label": "GitHub", "handle": "seb646", "url": "https://github.com/seb646", "inFooter": True},
    {"_type": "socialLink", "label": "LinkedIn", "handle": "sebastianprodriguez", "url": "https://www.linkedin.com/in/sebastianprodriguez", "inFooter": True},
    {"_type": "socialLink", "label": "Bluesky", "handle": "@srod.ca", "url": "https://bsky.app/profile/srod.ca", "inFooter": True},
])
docs.append({
    "_id": "siteSettings", "_type": "siteSettings",
    "name": "Sebastian Rodriguez", "tagline": "Researcher & Engineer", "accent": "#7a1e2c",
    "email": "me@srod.ca", "profiles": profiles,
    "seoDescription": "Sebastian Rodriguez is a researcher and engineer working at the intersection of AI, education, and the public interest.",
})

# ---------- Home ----------
docs.append({
    "_id": "homePage", "_type": "homePage",
    "eyebrow": "Researcher & Engineer",
    "headline": "I study and build technology at the intersection of AI, education, and the public interest.",
    "intro": [
        block("Trained in information science at the University of Toronto and internet studies at Oxford, I’m a software engineer and researcher at metaLAB (at) Harvard, part of Harvard’s Faculty of Arts and Sciences. I also lead engineering on the AI Pedagogy Project and collaborate with the Data Nutrition Project."),
        block("My work moves between research and engineering: first understanding how people and technology shape each other, then building open tools that empower people and help them learn."),
    ],
    "cta": link("More about me", "/about"),
    "facts": keyed([
        {"_type": "factColumn", "heading": "Currently", "lines": ["metaLAB (at) Harvard", "AI Pedagogy Project", "Data Nutrition Project"]},
        {"_type": "factColumn", "heading": "Interests", "lines": ["AI & education, responsible AI, human-computer interaction, surveillance, disinformation"]},
        {"_type": "factColumn", "heading": "Education", "lines": ["MSc, University of Oxford", "BI, University of Toronto"]},
    ]),
    "selectedWorkHeading": "Selected work",
    "selectedWork": [ref("work-aipp"), ref("work-flip"), ref("work-reflect"), ref("work-beyond-disinfo")],
    "allWorkLabel": "All work, including research",
})

# ---------- About ----------
docs.append({
    "_id": "aboutPage", "_type": "aboutPage",
    "eyebrow": "About", "heading": "Hi, I’m Sebastian.",
    "lede": "I’m a researcher and engineer exploring the social, political, and ethical dimensions of AI, with a focus on responsible AI in education and public AI literacy.",
    "body": [
        block("At metaLAB (at) Harvard, part of Harvard’s Faculty of Arts and Sciences, I work as a software engineer and researcher. Since 2023, I’ve also led engineering on the ", ("AI Pedagogy Project", "/work"), ", and I’m a software engineer with the Data Nutrition Project."),
        block("My research is grounded in the digital humanities and often touches on surveillance, disinformation, critical security studies, human–computer interaction, and teaching and learning."),
        block("I’m trained in information science, social science, and internet studies at the University of Toronto’s Faculty of Information and the Oxford Internet Institute, with a summer at Harvard’s Berkman Klein Center for Internet & Society along the way. That mix shapes how I build: I start by asking who a tool is for and what it might change, then make it open, accessible, and useful."),
    ],
    "currentHeading": "Currently",
    "current": keyed([
        entry("Software Engineer & Researcher", "metaLAB (at) Harvard", "2023–present"),
        entry("Lead Engineer", "AI Pedagogy Project", "2023–present"),
        entry("Software Engineer", "Data Nutrition Project", "2024–present"),
    ]),
    "educationHeading": "Education",
    "education": keyed([
        entry("MSc, Social Science of the Internet", "University of Oxford", "2025"),
        entry("Bachelor of Information", "University of Toronto", "2024", note="with high distinction"),
    ]),
    "pastHeading": "A bit about my past",
    "past": keyed([
        entry("Peer Reviewer", "Journal for Interdisciplinary Digital Engagement in Arts & Humanities (IDEAH)", "2025"),
        entry("Research Engineer", "Society for Teaching & Learning in Higher Education", "2024"),
        entry("Member of the Academic Board", "University of Toronto, Governing Council", "2023–2024"),
        entry("Research Assistant & Web Developer", "University of Toronto, Various projects", "2022–2024"),
        entry("Summer Intern at the Berkman Klein Center for Internet & Society", "Harvard University, Harvard Law School", "2023"),
        entry("Undergraduate Fellow in Critical Digital Humanities", "University of Toronto, Critical Digital Humanities Initiative", "2022"),
    ]),
    "interestsHeading": "Research interests",
    "interests": ["AI & education", "Responsible AI", "Human–computer interaction", "Digital humanities", "Surveillance studies", "Digital disinformation", "Teaching and learning in higher education"],
    "cvLabel": "Download CV",
})

# ---------- Work page ----------
def section(title, nav, anchor, subtitle, ids):
    return {"_type": "workSection", "title": title, "navLabel": nav, "anchor": {"_type": "slug", "current": anchor},
            "subtitle": subtitle, "items": [ref(i) for i in ids]}
docs.append({
    "_id": "workPage", "_type": "workPage",
    "eyebrow": "Work",
    "headline": "A selection of tools, research, and learning materials I’ve worked on.",
    "sections": keyed([
        section("Tools for learning", "Tools for learning", "tools", "Resources for educators and students", ["work-aipp", "work-flip", "work-reflect"]),
        section("Selected research", "Research", "research", "On disinformation, surveillance, and power", ["work-beyond-disinfo", "work-us-surveillance"]),
        section("Curriculum development", "Curriculum", "teaching", "Online courses and learning materials on AI", ["work-sage-ai", "work-ocean-ai"]),
    ]),
})

# ---------- Contact ----------
orgs = ["Harvard University", "University of Oxford", "University of Toronto", "metaLAB (at) Harvard", "Berkman Klein Center",
        "Oxford Internet Institute", "AI Pedagogy Project", "Data Nutrition Project", "Sage Publishing", "STLHE"]
docs.append({
    "_id": "contactPage", "_type": "contactPage",
    "eyebrow": "Contact",
    "heading": "Open to engineering and research collaborations.",
    "intro": "I bring a researcher’s questions and an engineer’s toolkit to teams working on AI, education, and the public interest.",
    "primaryButtonLabel": "Send me a message",
    "secondaryButton": link("Connect with me", "https://www.linkedin.com/in/sebastianprodriguez"),
    "servicesHeading": "How I can help",
    "services": keyed([
        {"_type": "service", "title": "Research engineering", "description": "Building tools, platforms, and prototypes for research teams and labs."},
        {"_type": "service", "title": "Web & product development", "description": "Accessible, maintainable sites and apps using React/Next.js, WordPress, and headless CMS. Incorporating AI, or showcasing the humanity of your project."},
        {"_type": "service", "title": "AI & education", "description": "Research, curriculum, and resources for responsible AI use in teaching and learning."},
    ]),
    "organizationsHeading": "Where I’ve worked & performed research",
    "organizations": keyed([{"_type": "organization", "name": n} for n in orgs]),
    "connectHeading": "Connect with me",
    "connectLinks": keyed([
        {"_type": "socialLink", "label": "Email", "handle": "me@srod.ca", "url": "mailto:me@srod.ca"},
        {"_type": "socialLink", "label": "Harvard", "handle": "srodriguez@metalab.harvard.edu", "url": "mailto:srodriguez@metalab.harvard.edu"},
        {"_type": "socialLink", "label": "LinkedIn", "handle": "sebastianprodriguez", "url": "https://www.linkedin.com/in/sebastianprodriguez"},
        {"_type": "socialLink", "label": "GitHub", "handle": "seb646", "url": "https://github.com/seb646"},
        {"_type": "socialLink", "label": "ORCID", "handle": "0009-0000-1683-5211", "url": "https://orcid.org/0009-0000-1683-5211"},
        {"_type": "socialLink", "label": "Bluesky", "handle": "@srod.ca", "url": "https://bsky.app/profile/srod.ca"},
    ]),
    "formHeading": "Send me a message",
    "formTopics": ["Engineering role", "Research collaboration", "Contract or consulting project", "Speaking or teaching", "Something else"],
    "successMessage": "Thanks — your message is on its way. I’ll reply soon.",
})

out = os.path.join(os.path.dirname(__file__), "content.ndjson")
with open(out, "w") as f:
    for d in docs:
        f.write(json.dumps(d, ensure_ascii=False) + "\n")
print(f"wrote {len(docs)} documents to {out}")
