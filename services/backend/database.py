'''
Basic Database.py file implementation
'''

import os

from sqlalchemy import Column, String, Integer, create_engine
from sqlalchemy.orm import registry

engine = create_engine(os.environ["DATABASE_ENGINE"],
	echo=True)

mapper_registry = registry()

Base = mapper_registry.generate_base()
'''
Test "Equipment" Class.
Will ultimately remove later.
'''
class Equipment(Base):
    __tablename__ = 'Equipment'
    equipment_id = Column(Integer, primary_key=True)

    title = Column(String(length=50))
    description = Column(String(length=50))

    def __repr__(self):
        return "<Project(title='{0}, description='{1}')>".format(
            self.title, self.description)

Base.metadata.create_all(engine)
