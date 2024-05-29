import os
import requests

print("DATABASE.py")

from sqlalchemy import Column, String, Integer, ForeignKey, create_engine, DateTime, JSON
from sqlalchemy.orm import registry, relationship, Session
from sqlalchemy.sql import func

engine = create_engine(os.environ["DATABASE_ENGINE"],
	echo=True)

mapper_registry = registry()

Base = mapper_registry.generate_base()

class Equipment(Base):
    # equipment_id,equipment_type,manufacturer,model,serial_number,purchase_date,warranty_expiration,operating_system,processor,ram_size,last_test_date
    __tablename__ = 'Equipment'
    equipment_id = Column(Integer, primary_key=True)
    # equipment_type
    # manufacturer
    # model
    # serial_number
    # purchase_date
    # warranty_expiration
    # operating_system
    # processor
    # ram_size
    # last_test_date
    title = Column(String(length=50))
    description = Column(String(length=50))

    def __repr__(self):
        return "<Project(title='{0}, description='{1}')>".format(
            self.title, self.description)

Base.metadata.create_all(engine)